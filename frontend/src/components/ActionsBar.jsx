import { useEffect, useState } from 'react';

export const ActionsBar = ({
	onPageChanged,
	onCategoriesMenu,
	onSortChanged,
	currPage,
	nextPage,
}) => {
	const [prevBlock, setPrevBlock] = useState(false);
	const [nextBlock, setNextBlock] = useState(false);

	useEffect(() => {
		checkPage();
	}, [currPage, nextPage]);

	const checkPage = () => {
		!currPage ? setPrevBlock(true) : setPrevBlock(false);
		!nextPage ? setNextBlock(true) : setNextBlock(false);
	};

	return (
		<div className="actions-bar-container">
			<button
				className="page-btn"
				onClick={() => onPageChanged(-1)}
				style={{ cursor: prevBlock && 'not-allowed' }}
			>
				Prev
			</button>
			<button onClick={onCategoriesMenu}>Categories</button>
			<form onChange={onSortChanged}>
				<label>
					Sort by &nbsp;
					<select name="sortBy">
						<option value="likes">Likes</option>
						<option value="downloads">Downloads</option>
						<option value="views">Views</option>
						<option value="id">id</option>
					</select>
				</label>
				<label>
					Order
					<select name="order">
						<option value="desc">Descending</option>
						<option value="asce">Ascending</option>
					</select>
				</label>
			</form>
			<button
				className="page-btn"
				onClick={() => onPageChanged(1)}
				style={{ cursor: nextBlock && 'not-allowed' }}
			>
				Next
			</button>
		</div>
	);
};

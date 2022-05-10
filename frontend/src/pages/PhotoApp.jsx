import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPhotos, setFilter, setSort } from '../store/actions/photoActions';
import { PhotoList } from '../components/PhotoList';
import { PhotoDetailsModal } from '../components/PhotoDetailsModal';
import { ActionsBar } from '../components/ActionsBar';
import { CategoriesModal } from '../components/CategoriesModal';

export const PhotoApp = () => {
	const { categories, photos, filterBy, sortBy } = useSelector(
		(state) => state.photoModule
	);
	const [detailsModal, setDetailsModal] = useState(null);
	const [categoriesModal, setCategoriesModal] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadPhotos());
	},[]);

	const onPhotoClicked = (id) => {
		const photoForDisplay = photos.currPage.filter((photo) => photo.id === id);
		setDetailsModal(photoForDisplay);
	};

	const onPhotoClosed = ({ target }) => {
		if (
			target.className === 'modal-details-background' ||
			target.className === 'btn-close'
		)
			setDetailsModal(null);
		else return;
	};

	//On page change the function checking if there are photos on the next page, or it's on the first page.
	const onPageChanged = (pageDirection) => {
		if (!photos.nextPage.length && pageDirection > 0) return;
		if (!filterBy.page && pageDirection < 0) return;

		const newFilter = { ...filterBy };
		newFilter.page = filterBy.page + pageDirection;
		dispatch(setFilter(newFilter));
		dispatch(loadPhotos());
	};

	const onCategoriesMenu = () => {
		setCategoriesModal(!categoriesModal);
	};

	const onCategoryChanged = (category) => {
		const newFilter = { ...filterBy };
		newFilter.category = category;
		dispatch(setFilter(newFilter));
		dispatch(loadPhotos());
	};

	const onSortChanged = ({ target }) => {
		const newSort = { ...sortBy };
		newSort[target.name] = target.value;
		dispatch(setSort(newSort));
		dispatch(loadPhotos());
	};

	return (
		<section className="photo-app-container main-app container">
			<ActionsBar
				onPageChanged={onPageChanged}
				onCategoriesMenu={onCategoriesMenu}
				onSortChanged={onSortChanged}
				nextPage={photos.nextPage?.length}
				currPage={filterBy.page}
			/>

			<PhotoList photos={photos.currPage} onPhotoClicked={onPhotoClicked} />
			{detailsModal && (
				<PhotoDetailsModal
					detailsModal={detailsModal}
					onPhotoClosed={onPhotoClosed}
				/>
			)}
			{categoriesModal && (
				<CategoriesModal
					onCategoryChanged={onCategoryChanged}
					onCategoriesMenu={onCategoriesMenu}
					currCategory={filterBy.category}
					categories={categories}
				/>
			)}
		</section>
	);
};

export const CategoriesModal = ({
	onCategoryChanged,
	onCategoriesMenu,
	currCategory,
	categories,
}) => {
	return (
		<section className="categories-modal">
			<button onClick={onCategoriesMenu}>X</button>
			{categories.map((category) => (
				<label key={category}>
					<input
						type="radio"
						value={category}
						onChange={() => onCategoryChanged(category)}
						name="categories"
						checked={currCategory === category}
					/>
					<span>{category}</span>
				</label>
			))}
		</section>
	);
};

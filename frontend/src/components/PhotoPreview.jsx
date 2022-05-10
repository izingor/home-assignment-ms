export const PhotoPreview = ({ photo, onPhotoClicked }) => {
	const tags = photo.tags.split(',');

	return (
		<section className="photo-preview" onClick={() => onPhotoClicked(photo.id)}>
			<img src={photo.previewURL} alt="" />
			<div className="tags-container">
				{tags &&
					tags.map((tag) => (
						<div className="tag" key={tag}>
							<p>{tag}</p>
						</div>
					))}
			</div>
		</section>
	);
};

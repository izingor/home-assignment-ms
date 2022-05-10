import { PhotoPreview } from './PhotoPreview';

export const PhotoList = ({ photos, onPhotoClicked }) => {
	return (
		<section className="photos-list-container simple-cards-grid">
			{photos ? (
				photos.map((photo) => (
					<PhotoPreview
						photo={photo}
						key={photo.id}
						onPhotoClicked={onPhotoClicked}
					/>
				))
			) : (
				<h2>Loading</h2>
			)}
		</section>
	);
};

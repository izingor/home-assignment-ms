export const PhotoDetailsModal = ({ detailsModal, onPhotoClosed }) => {
	const details = detailsModal[0];

	return (
		<section
			className="modal-details-background"
			onClick={(ev) => onPhotoClosed(ev)}
		>
			<section className="modal-content">
				<button className="btn-close">X</button>
				<div className="photo-details">

					<p>
						<span>User:</span> {details.user}
					</p>
					<p>
						<span>Type:</span> {details.type}
					</p>
					<p>
						<span>Collections:</span> {details.collections}
					</p>
					<p>
						<span>Comments:</span> {details.comments}
					</p>
					<p>
						<span>Likes:</span> {details.likes}
					</p>
					<p>
						<span>Views:</span> {details.views}
					</p>
					<p>
						<span>Dowloads:</span> {details.downloads}
					</p>
				</div>
				<img src={details.largeImageURL} alt=""/>
			</section>
		</section>
	);
};

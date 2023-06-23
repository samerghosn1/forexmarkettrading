import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const images = [
	{
		src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
		width: 4,
		height: 3,
	},
	{
		src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
		width: 1,
		height: 1,
	},
	{
		src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
		width: 3,
		height: 4,
	},
	{
		src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
		width: 3,
		height: 4,
	},
];

const CarouselMain = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};
	return (
		<div>
			<Gallery photos={images} onClick={openLightbox} />
			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel
							currentIndex={currentImage}
							views={images.map((x) => ({
								...x,
								srcset: x.srcSet,
								caption: x.title,
							}))}
						/>
					</Modal>
				) : null}
			</ModalGateway>
		</div>
	);
};

export default CarouselMain;

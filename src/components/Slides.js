import image1 from '../images/carousal1.png';

import image2 from '../images/carousel2.png';

import image3 from '../images/carousel4.png';

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];
const unsplashPhotos = [
	{
		id: image1,
		width: 1080,
		height: 1620,
	},
	{
		id: image2,
		width: 1080,
		height: 1426,
	},
	{
		id: image3,
		width: 1080,
		height: 1440,
	},
	{
		id: image1,
		width: 1080,
		height: 1620,
	},
	{
		id: image2,
		width: 1080,
		height: 1426,
	},
	{
		id: image3,
		width: 1080,
		height: 1440,
	},
];

export const slides = unsplashPhotos.map((photo) => {
	const width = photo.width * 4;
	const height = photo.height * 4;
	return {
		src: photo.id,
		width,
		height,
		srcSet: breakpoints.map((breakpoint) => {
			const breakpointHeight = Math.round((height / width) * breakpoint);
			return {
				src: photo.id,
				width: breakpoint,
				height: breakpointHeight,
			};
		}),
	};
});

import week1 from '../images/week1.png';
import week2 from '../images/week2.png';
import week3 from '../images/week3.png';
import week4 from '../images/week4.png';
import week5 from '../images/week5.png';
import week6 from '../images/week6.png';

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];
const unsplashPhotos = [
	{
		id: week1,
		width: 1080,
		height: 1620,
		title: 'Week 1',
		description: 'June 26 2023 - July 02 2023',
	},
	{
		id: week2,
		width: 1080,
		height: 1426,
		title: 'Week 2',
		description: 'July 03 2023 - July 08 2023',
	},
	{
		id: week3,
		width: 1080,
		height: 1440,
		title: 'Week 3',
		description: 'July 10 2023 - July 16 2023',
	},
	{
		id: week4,
		width: 1080,
		height: 1620,
		title: 'Week 4',
		description: ' July 17 2023 - July 23 2023',
	},
	{
		id: week5,
		width: 1080,
		height: 1426,
		title: 'Week 5',
		description: 'July 24 2023 - July 28 2023',
	},
	{
		id: week6,
		width: 1080,
		height: 1440,
		title: 'Week 6',
		description: 'August 01 2023 - August 06 2023',
	},
];

export const slides = unsplashPhotos.map((photo) => {
	const width = photo.width * 4;
	const height = photo.height * 4;
	return {
		src: photo.id,
		width,
		height,
		description: photo.description,
		title: photo.title,
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

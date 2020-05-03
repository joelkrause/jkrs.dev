import { css } from 'styled-components';

const breakpoints = {
	mobile: '480px',
	tabletPortrait: '768px',
	tabletLandscape: '1024px',
    laptop: '1200px',
    desktop: '1600px'
};

export const breakpointFrom = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

export const breakpointTo = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (max-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});
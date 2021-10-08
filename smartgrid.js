module.exports = {
	outputStyle: 'sass',
	columns: 12,
	container: {
		maxWidth: '1500px', /* max-width оn very large screen */
		fields: '30px' /* side fields */
	},
	breakPoints: {
		lg: {
			width: '1199px', /* -> @media (max-width: 1199px) */
		},
		md: {
			width: '1023px'
		},
		sm: {
			width: '767px',
			fields: '15px'
		},
		xs: {
			width: '599px'
		}
	}
};
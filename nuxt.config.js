export default {
	components: true,
	router: {
		linkExactActiveClass: 'is-active'
	},
	css: [
		'~/css/global.css'
	],
	render: {
		bundleRenderer: {
			shouldPreload: (file, type) => {
				return ['script', 'style', 'font'].includes(type)
			}
		}
	}
}

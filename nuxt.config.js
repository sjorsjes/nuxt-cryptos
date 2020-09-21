export default {
	css: [
		'~/css/global.css'
	],

	components: true,

	router: {
		linkExactActiveClass: 'is-active'
	},

	render: {
		bundleRenderer: {
			shouldPreload: (file, type) => {
				return ['script', 'style', 'font'].includes(type)
			}
		}
	},

	storybook: {
		port: 4000
	}
}

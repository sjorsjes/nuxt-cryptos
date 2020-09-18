<template>
	<div>
		<h1 class="heading-shout">{{ title }}</h1>

		<p>This project is meant as a playground to get a better understanding of how to use Nuxt.js and Vue.</p>

		<img src="~/assets/science.jpg" alt="Science dog" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'About'
			};
		},

		head() {
			return {
				title: this.title,
			};
		}
	};
</script>
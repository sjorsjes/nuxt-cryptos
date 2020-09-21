<template>
	<div class="chart">
		insert {{ id }} chart here
	</div>
</template>

<script>
	export default {
		props: {
			id: {
				type: String,
			}
		},
	};
</script>

<style scoped>
	.chart {
		display: grid;
		grid-template-rows: 1fr min-content;
		height: 25rem;
		margin: var(--distance) 0;
		padding-bottom: var(--distance);
		border-bottom: 1px solid var(--border-color);
	}
</style>

<template>
	<header class="header">
		<h1 class="h1">
			{{ title }}
		</h1>

		<span class="heading-xxl" v-if="priceUsd">
			<Tick :tickKey="priceUsdFormatted">
				{{ this.priceUsdFormatted }}
			</Tick>
		</span>

		<span class="change heading-xxl" v-if="changePercent24Hr">
			{{ this.changePercent24HrFormatted }}
		</span>
	</header>
</template>

<script>
	import localize from '../../utils/localize';

	export default {
		props: {
			title: {
				type: String,
			},
			changePercent24Hr: {
				type: String,
			},
			priceUsd: {
				type: String,
			},
		},

		computed: {
			changePercent24HrFormatted() {
				return localize.formatPercentage(this.changePercent24Hr);
			},

			priceUsdFormatted() {
				return localize.formatCurrency(this.priceUsd);
			}
		}
	};
</script>

<style scoped>
	.header {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
	}

	.h1 {
		margin-right: var(--gutter);
	}

	.change {
		margin-left: auto;
	}
</style>

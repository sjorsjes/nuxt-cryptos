<template>
	<div class="meta">
		<div>
			<h2 class="heading-m">Rank:</h2>
			{{ rank }}
		</div>
		<div>
			<h2 class="heading-m">Market Cap:</h2>
			{{ this.marketCapUsdFormatted }}
		</div>
		<div>
			<h2 class="heading-m">Volume (24Hr):</h2>
			{{ this.volumeUsd24HrFormatted }}
		</div>
		<div>
			<h2 class="heading-m">Supply:</h2>
			{{ this.supplyFormatted }} {{ symbol }}
		</div>
	</div>
</template>

<script>
	import localize from '../utils/localize';

	export default {
		name: 'chart-meta',

		props: {
			rank: {
				type: String,
			},
			marketCapUsd: {
				type: String,
			},
			volumeUsd24Hr: {
				type: String,
			},
			supply: {
				type: String,
			},
			symbol: {
				type: String,
			},
		},

		computed: {
			marketCapUsdFormatted() {
				return localize.formatCurrency(this.marketCapUsd);
			},

			volumeUsd24HrFormatted() {
				return localize.formatCurrency(this.volumeUsd24Hr);
			},

			supplyFormatted() {
				return localize.formatDecimal(this.supply)
			}
		}
	};
</script>

<style scoped>
	.meta {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		grid-auto-rows: auto;
		gap: var(--gutter);
	}
</style>
<template>
	<div class="cryptocollection">
		<CryptoCard
			v-for="(crypto, index) in this.cryptos"
				:key="crypto.id"
				:index="index"
				:id="crypto.id"
				:changePercent24Hr="crypto.changePercent24Hr"
				:name="crypto.name"
				:priceUsd="crypto.priceUsd"
				:priceUsdOld="crypto.priceUsdOld"
				:rank="crypto.rank"
				:symbol="crypto.symbol"
		/>
	</div>
</template>

<script>
	export default {
		props: {
			showAmount: {
				default: 100,
				type: Number,
			}
		},

		computed: {
			cryptos() {
				const cryptoList = this.$store.getters['cryptos/list'];

				if (cryptoList) {
					return cryptoList.slice(0, this.showAmount);
				}

				return [];
			},
		},

		async fetch() {
			return this.$store.dispatch('cryptos/getCryptoCollection');
		}
	};
</script>

<style scoped>
	.cryptocollection {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		grid-auto-rows: auto;
		gap: var(--gutter);

		margin-bottom: var(--gutter);
	}
</style>

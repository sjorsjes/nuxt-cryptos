<template>
	<div>
		<h1 class="heading-shout">{{ this.$route.params.id }}</h1>

		<div v-if="this.item">
			<Chartheader
				:title="this.item.name"
				:changePercent24Hr="this.item.changePercent24Hr"
				:priceUsd="this.item.priceUsd"
			/>

			<Chartmeta
				:rank="this.item.rank"
				:marketCapUsd="this.item.marketCapUsd"
				:volumeUsd24Hr="this.item.volumeUsd24Hr"
				:supply="this.item.supply"
				:symbol="this.item.symbol"
			/>

			<Chart />

			<NuxtLink :to="'/cryptos'" class="link">
				Back to overview
			</NuxtLink>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		data() {
			return {
				id: this.$route.params.id
			};
		},

		head() {
			return {
				title: this.$route.params.id,
			};
		},

		computed: {
			...mapGetters('cryptos', [
				'byId',
			]),

			item() {
				return this.byId(this.$route.params.id);
			}
		},

		async fetch() {
			return this.$store.dispatch('cryptos/getCryptoCollection');
		}
	};
</script>

<template>
	<article class="article">
		<NuxtLink :to="`/cryptos/${id}`" class="link">
			<div class="meta">
				<h1 class="title">
					{{ rank }}. {{ name }}
				</h1>

				<div class="change">
					{{ changeFormatted }}
				</div>
			</div>

			<div class="meta">
				<div class="symbol">
					{{ symbol }}
				</div>

				<div class="price">
					<Tick :tickKey="priceFormatted">
						{{ priceFormatted }}
					</Tick>
				</div>
			</div>
		</NuxtLink>
	</article>
</template>

<script>
	import localize from '../utils/localize';
	import round from 'lodash.round';

	const CLASS_TICK_DOWN = 'tick-down';
	const CLASS_TICK_UP = 'tick-up';

	export default {
		name: 'cryptocard',

		props: {
			id: {
				type: String,
			},
			changePercent24Hr: {
				type: String,
			},
			name: {
				type: String,
			},
			priceUsd: {
				type: String,
			},
			priceUsdOld: {
				type: String,
			},
			rank: {
				type: String,
			},
			symbol: {
				type: String,
			}
		},

		computed: {
			price() {
				return round(this.priceUsd, 2);
			},

			changeFormatted() {
				return localize.formatPercentage(this.changePercent24Hr);
			},

			priceFormatted() {
				return localize.formatCurrency(round(this.priceUsd, 2));
			}
		},
	};
</script>

<style scoped>
	.article {
		display: flex;
		flex-direction: column;
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
	}

	.link {
		flex: 1;
		display: block;
		padding: var(--distance);
		color: var(--foreground-color);
		text-decoration: none;
		border-radius: inherit;
	}

	.link:hover,
	.link:focus {
		color: var(--background-color);
		background: var(--foreground-color);
		border-color: var(--foreground-color);
		box-shadow: var(--box-shadow);
		outline: none;
	}

	.meta {
		display: flex;
	}

	.meta > div {
		flex: 1;
	}

	.title,
	.change {
		font-size: var(--font-size-s);
	}

	.change {
		text-align: right;
	}

	.symbol,
	.price {
		font-size: var(--font-size-xl);
		font-weight: bold;
	}

	.price {
		text-align: right;
	}

	.tick-down {
		animation-name: downTick;
		animation-duration: 0.75s;
	}

	.tick-up {
		animation-name: upTick;
		animation-duration: 0.75s;
	}

	@keyframes downTick {
		0% {
			background: var(--background-color);
		}
		50% {
			background: var(--negative-color);
		}
		100% {
			background: var(--background-color);
		}
	}

	@keyframes upTick {
		0% {
			background: var(--background-color);
		}
		50% {
			background: var(--positive-color);
		}
		100% {
			background: var(--background-color);
		}
	}
</style>

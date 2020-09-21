<template>
	<div>
		<h1 class="heading-shout">{{ title }}</h1>

		<p>Everybody wants to buy cryptos because they will make you super rich. No risk involved at all. You can also use them to buy super legal stuff on the dark web.</p>

		<h2 class="heading-xxxl">Popular cryptos</h2>

		<CryptoCollection :showAmount="3" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'CRYPTOS ARE AMAZING!'
			};
		},

		head() {
			return {
				title: this.title,
			};
		}
	};
</script>

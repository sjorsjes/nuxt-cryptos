<template>
	<nav class="navigation">
		<ul class="list">
			<li class="list-item">
				<NuxtLink to='/' class="link">Home</NuxtLink>
			</li>
			<li class="list-item">
				<NuxtLink to='/cryptos' class="link">Cryptos</NuxtLink>
			</li>
			<li class="list-item">
				<NuxtLink to='/about' class="link">About</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
	.navigation {
		font-weight: 300;
		border-bottom: 1px solid var(--border-color);
	}

	.list {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	.list:after {
		content: '';
		display: block;
		clear: both;
	}

	.list-item {
		display: block;
		float: left;
	}

	.link {
		display: block;
		padding: var(--distance);
		text-decoration: none;
	}

	.link:hover,
	.link:focus {
		color: var(--interaction-color);
		text-decoration: underline;
		outline: none;
	}

	.is-active {
		position: relative;
		display: inline-block;
		color: var(--action-color);
		font-weight: bold;
	}
</style>
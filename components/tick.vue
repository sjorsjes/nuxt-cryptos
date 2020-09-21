<template>
	<transition name="tick" mode="out-in">
		<div class="tick" :key="tickKey">
			<slot />
		</div>
	</transition>
</template>

<script>
	export default {
		props: {
			tickKey: {
				required: true,
			},
		},
	};
</script>

<style scoped>
	.tick-leave-active {
		opacity: 0.3;
		transition-duration: 0.1s;
	}

	.tick-enter {
		opacity: 0.3;
	}

	.tick-enter-active {
		transition-delay: 0.2s;
		transition-duration: 0.5s;
	}

	.tick-leave-active,
	.tick-enter-active {
		@media (prefers-reduced-motion: reduce) {
			transition: unset;
			opacity: 1;
		}
	}

	.no-animation .tick-leave-active,
	.no-animation .tick-enter-active {
		transition: unset;
		opacity: 1;
	}
</style>

export { default as Navigation } from '../..\\components\\navigation.vue'
export { default as Tick } from '../..\\components\\tick.vue'
export { default as Chart } from '../..\\components\\chart\\chart.vue'
export { default as ChartHeader } from '../..\\components\\chart\\chartHeader.vue'
export { default as ChartMeta } from '../..\\components\\chart\\chartMeta.vue'
export { default as CryptoCard } from '../..\\components\\crypto\\cryptoCard.vue'
export { default as CryptoCollection } from '../..\\components\\crypto\\cryptoCollection.vue'

export const LazyNavigation = import('../..\\components\\navigation.vue' /* webpackChunkName: "components_navigation" */).then(c => c.default || c)
export const LazyTick = import('../..\\components\\tick.vue' /* webpackChunkName: "components_tick" */).then(c => c.default || c)
export const LazyChart = import('../..\\components\\chart\\chart.vue' /* webpackChunkName: "components_chart/chart" */).then(c => c.default || c)
export const LazyChartHeader = import('../..\\components\\chart\\chartHeader.vue' /* webpackChunkName: "components_chart/chartHeader" */).then(c => c.default || c)
export const LazyChartMeta = import('../..\\components\\chart\\chartMeta.vue' /* webpackChunkName: "components_chart/chartMeta" */).then(c => c.default || c)
export const LazyCryptoCard = import('../..\\components\\crypto\\cryptoCard.vue' /* webpackChunkName: "components_crypto/cryptoCard" */).then(c => c.default || c)
export const LazyCryptoCollection = import('../..\\components\\crypto\\cryptoCollection.vue' /* webpackChunkName: "components_crypto/cryptoCollection" */).then(c => c.default || c)

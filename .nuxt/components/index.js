export { default as Chart } from '../..\\components\\chart.vue'
export { default as Chartheader } from '../..\\components\\chartheader.vue'
export { default as Chartmeta } from '../..\\components\\chartmeta.vue'
export { default as Cryptocard } from '../..\\components\\cryptocard.vue'
export { default as Cryptocollection } from '../..\\components\\cryptocollection.vue'
export { default as Navigation } from '../..\\components\\navigation.vue'
export { default as Tick } from '../..\\components\\tick.vue'

export const LazyChart = import('../..\\components\\chart.vue' /* webpackChunkName: "components_chart" */).then(c => c.default || c)
export const LazyChartheader = import('../..\\components\\chartheader.vue' /* webpackChunkName: "components_chartheader" */).then(c => c.default || c)
export const LazyChartmeta = import('../..\\components\\chartmeta.vue' /* webpackChunkName: "components_chartmeta" */).then(c => c.default || c)
export const LazyCryptocard = import('../..\\components\\cryptocard.vue' /* webpackChunkName: "components_cryptocard" */).then(c => c.default || c)
export const LazyCryptocollection = import('../..\\components\\cryptocollection.vue' /* webpackChunkName: "components_cryptocollection" */).then(c => c.default || c)
export const LazyNavigation = import('../..\\components\\navigation.vue' /* webpackChunkName: "components_navigation" */).then(c => c.default || c)
export const LazyTick = import('../..\\components\\tick.vue' /* webpackChunkName: "components_tick" */).then(c => c.default || c)

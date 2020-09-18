const WebSocket = require('isomorphic-ws');

const webSocketPlugin = () => {
	const ws = new WebSocket('wss://ws.coincap.io/prices?assets=ALL');

	return store => {
		ws.onmessage = function incoming(tick) {
			store.commit('cryptos/updateCryptoCollectionPrices', JSON.parse(tick.data));
		};
	}
}

export default webSocketPlugin;

import axios from 'axios';

export const state = () => ({
	items: []
})

export const getters = {
	list: (state) => {
		return state.items;
	},

	byId: (state) => {
		return id => {
			return state.items.find(i => i.id === id)
		};
	},
}

export const mutations = {
	setCryptoCollection(state, cryptos) {
		state.items = cryptos;
	},

	updateCryptoCollectionPrices(state, prices) {
		const newState = [...state.items];
		const products = Object.keys(prices);

		state.items = newState.map(item => {
			if (products.includes(item.id)) {
				item.priceUsd = prices[item.id];
			}

			return item;
		});
	}
}

export const actions = {
	async getCryptoCollection({ commit, getters }) {
		// Only get when list is empty
		if (!getters.list.length) {
			let { data: cryptos } = await axios.get('https://api.coincap.io/v2/assets?limit=100');

			commit('setCryptoCollection', cryptos.data);
		}
	}
}

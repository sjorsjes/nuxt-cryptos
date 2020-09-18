class Localize {
	constructor(locale = 'en-US') {
		this.formatters = {
			currency: new Intl.NumberFormat(locale, {
				style: 'currency',
				currency: 'USD',
			}),

			decimal: new Intl.NumberFormat(locale, {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			}),

			percentage: new Intl.NumberFormat(locale, {
				style: 'percent',
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			}),
		};
	}

	formatCurrency(payload) {
		return this.formatters.currency.format(payload);
	}

	formatDecimal(payload) {
		return this.formatters.decimal.format(payload);
	}

	formatPercentage(payload) {
		return this.formatters.percentage.format(payload / 100);
	}
}

export default new Localize();
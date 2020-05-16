export const state = () => ({
	dict: initialData
});

export const mutations = {
	INCREMENT_SELECTED(state, itemKey) {
		state.dict[itemKey].index++;
	},
	DECREMENT_SELECTED(state, itemKey) {
		state.dict[itemKey].index--;
	}
};

export const actions = {
	incrementSelected({commit, state}, itemKey) {
		if (state.dict[itemKey].index < (state.dict[itemKey].steps.length - 1)) {
			commit('INCREMENT_SELECTED', itemKey)
		}
	},
	decrementSelected({commit, state}, itemKey) {
		if (state.dict[itemKey].index > 0) {
			commit('DECREMENT_SELECTED', itemKey)
		}
	}
};

export const getters = {
	getSelection: (state) => (itemKey) => {
		return state.dict[itemKey];
	},
	getKeys: (state) => {
		return Object.keys(state.dict);
	}
};

// -------------------------- INITIAL DATA OBJECT -----------------------------

let initialData = {
	bow: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '03'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '03'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '4B'
			},
			{
				value: 'upgrade2',
				label: '',
				faded: false,
				itemId: '4C'
			}
		],
		index: 0
	},
	hookshot: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '0A'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '0A'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '0B'
			}
		],
		index: 0
	},
	megaton: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '11'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '11'
			}
		],
		index: 0
	},
	bombs: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '4D'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '4D'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '4E'
			},
			{
				value: 'upgrade2',
				label: '',
				faded: false,
				itemId: '4F'
			}
		],
		index: 0
	},
	bombchu: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '09'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '09'
			}
		],
		index: 0
	},
	scales: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '53'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '53'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '54'
			}
		],
		index: 0
	},
	strength: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '50'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '50'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '51'
			},
			{
				value: 'upgrade2',
				label: '',
				faded: false,
				itemId: '52'
			}
		],
		index: 0
	},
	dekuStick: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '00'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '00'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '98'
			},
			{
				value: 'upgrade2',
				label: '',
				faded: false,
				itemId: '99'
			}
		],
		index: 0
	},
	dekuNut: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '01'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '01'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '9A'
			},
			{
				value: 'upgrade2',
				label: '',
				faded: false,
				itemId: '9B'
			}
		],
		index: 0
	},
	kokiriSword: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '3B'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '3B'
			}
		],
		index: 0
	},
	masterSword: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '3C'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '3C'
			}
		],
		index: 0
	},
	biggoronsSword: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '3D'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '3D'
			}
		],
		index: 0
	},
	dekuShield: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '3E'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '3E'
			}
		],
		index: 0
	},
	hylianShield: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '3F'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '3F'
			}
		],
		index: 0
	},
	mirrorShield: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '40'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '40'
			}
		],
		index: 0
	},
	kokiriTunic: {
		steps: [
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '41'
			}
		],
		index: 0
	},
	goronTunic: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '42'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '42'
			}
		],
		index: 0
	},
	zoraTunic: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '43'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '43'
			}
		],
		index: 0
	},
	kokiriBoots: {
		steps: [
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '44'
			}
		],
		index: 0
	},
	ironBoots: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '45'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '45'
			}
		],
		index: 0
	},
	hoverBoots: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '46'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '46'
			}
		],
		index: 0
	},
	fireArrow: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '04'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '04'
			}
		],
		index: 0
	},
	iceArrow: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '0C'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '0C'
			}
		],
		index: 0
	},
	lightArrow: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '12'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '12'
			}
		],
		index: 0
	},
	dins: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '05'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '05'
			}
		],
		index: 0
	},
	nayrus: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '13'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '13'
			}
		],
		index: 0
	},
	farores: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '0D'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '0D'
			}
		],
		index: 0
	},
	slingshot: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '06'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '06'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '48'
			},
			{
				value: 'upgrade2',
				label: '',
				faded: false,
				itemId: '49'
			}
		],
		index: 0
	},
	ocarina: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '07'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '07'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '08'
			}
		],
		index: 0
	},
	boomerang: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '0E'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '0E'
			}
		],
		index: 0
	},
	lens: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '0F'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '0F'
			}
		],
		index: 0
	},
	beans: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: true,
				itemId: '10'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '10'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '10'
			},
			{
				value: 'upgrade2',
				label: '',
				faded: false,
				itemId: '10'
			},
			{
				value: 'upgrade3',
				label: '',
				faded: false,
				itemId: '10'
			},
			{
				value: 'upgrade4',
				label: '',
				faded: false,
				itemId: '10'
			},
			{
				value: 'upgrade5',
				label: '',
				faded: false,
				itemId: '10'
			},
			{
				value: 'upgrade6',
				label: '',
				faded: false,
				itemId: '10'
			},
			{
				value: 'upgrade7',
				label: '',
				faded: false,
				itemId: '10'
			},
			{
				value: 'upgrade8',
				label: '',
				faded: false,
				itemId: '10'
			},
			{
				value: 'upgrade9',
				label: '',
				faded: false,
				itemId: '10'
			}
		],
		index: 0
	},
	wallet: {
		steps: [
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: 'B0'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '56'
			},
			{
				value: 'upgrade2',
				label: '',
				faded: false,
				itemId: '57'
			},
			{
				value: 'upgrade3',
				label: '',
				faded: false,
				itemId: 'B1'
			}
		],
		index: 0
	},
	skulltula: {
		steps: generateSkulltulaSteps(),
		index: 0
	},
	childBottle: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '14'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '14'
			}
		],
		index: 0
	},
	rutoBottle: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '1B'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '1B'
			}
		],
		index: 0
	},
	milkBottle: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '1A'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '1A'
			}
		],
		index: 0
	},
	poeBottle: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '1E'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '1E'
			}
		],
		index: 0
	},
	childTrade: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '21'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '21'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '22'
			},
			{
				value: 'upgrade2',
				label: '',
				faded: false,
				itemId: '23'
			},
			{
				value: 'upgrade3',
				label: '',
				faded: false,
				itemId: '24'
			},
			{
				value: 'upgrade4',
				label: '',
				faded: false,
				itemId: '25'
			},
			{
				value: 'upgrade5',
				label: '',
				faded: false,
				itemId: '26'
			},
			{
				value: 'upgrade6',
				label: '',
				faded: false,
				itemId: '27'
			},
			{
				value: 'upgrade7',
				label: '',
				faded: false,
				itemId: '2B'
			}
		],
		index: 0
	},
	adultTrade: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '2D'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '2D'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '2E'
			},
			{
				value: 'upgrade2',
				label: '',
				faded: false,
				itemId: '2F'
			},
			{
				value: 'upgrade3',
				label: '',
				faded: false,
				itemId: '30'
			},
			{
				value: 'upgrade4',
				label: '',
				faded: false,
				itemId: '31'
			},
			{
				value: 'upgrade5',
				label: '',
				faded: false,
				itemId: '32'
			},
			{
				value: 'upgrade6',
				label: '',
				faded: false,
				itemId: '33'
			},
			{
				value: 'upgrade7',
				label: '',
				faded: false,
				itemId: '34'
			},
			{
				value: 'upgrade8',
				label: '',
				faded: false,
				itemId: '35'
			},
			{
				value: 'upgrade9',
				label: '',
				faded: false,
				itemId: '36'
			},
			{
				value: 'upgrade10',
				label: '',
				faded: false,
				itemId: '37'
			}
		],
		index: 0
	},
	magic: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '78'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '78'
			},
			{
				value: 'upgrade1',
				label: '',
				faded: false,
				itemId: '79'
			}
		],
		index: 0
	},
	gerudosCard: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '70'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '70'
			}
		],
		index: 0
	},
	agony: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '6F'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '6F'
			}
		],
		index: 0
	},
	doubleDefense: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: 'B2'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: 'B2'
			}
		],
		index: 0
	},
	lullaby: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '60'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '60'
			}
		],
		index: 0
	},
	eponas: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '61'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '61'
			}
		],
		index: 0
	},
	sarias: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '62'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '62'
			}
		],
		index: 0
	},
	suns: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '63'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '63'
			}
		],
		index: 0
	},
	songOfTime: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '64'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '64'
			}
		],
		index: 0
	},
	storms: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '65'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '65'
			}
		],
		index: 0
	},
	forestMedallion: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '66'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '66'
			}
		],
		index: 0
	},
	fireMedallion: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '67'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '67'
			}
		],
		index: 0
	},
	waterMedallion: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '68'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '68'
			}
		],
		index: 0
	},
	spiritMedallion: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '69'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '69'
			}
		],
		index: 0
	},
	shadowMedallion: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '6A'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '6A'
			}
		],
		index: 0
	},
	lightMedallion: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '6B'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '6B'
			}
		],
		index: 0
	},
	kokiriEmerald: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '6C'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '6C'
			}
		],
		index: 0
	},
	goronRuby: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '6D'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '6D'
			}
		],
		index: 0
	},
	zoraSapphire: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '6E'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '6E'
			}
		],
		index: 0
	},
	minuet: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '5A'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '5A'
			}
		],
		index: 0
	},
	bolero: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '5B'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '5B'
			}
		],
		index: 0
	},
	serenade: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '5C'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '5C'
			}
		],
		index: 0
	},
	requiem: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '5D'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '5D'
			}
		],
		index: 0
	},
	nocturne: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '5E'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '5E'
			}
		],
		index: 0
	},
	prelude: {
		steps: [
			{
				value: 'missing',
				label: '',
				faded: false,
				itemId: '5F'
			},
			{
				value: 'obtained',
				label: '',
				faded: false,
				itemId: '5F'
			}
		],
		index: 0
	}
}

function generateSkulltulaSteps() {
	let skulltullaSteps = [
		{
			value: 'missing',
			label: '',
			faded: true,
			itemId: '71'
		}
	]
	for (let i = 1; i <= 100; i++) {
		skulltullaSteps.push(
			{
				value: 'upgrade' + i,
				label: '',
				faded: false,
				itemId: '71'
			}
		)
	}
	return skulltullaSteps
}

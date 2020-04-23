export const state = () => ({
	dict: {
		kokiriSword: {
			name: 'Kokiri Sword',
			steps: [
				{value: 'missing', label: '', faded: true},
				{value: 'obtained', label: '', faded: false}
			],
			selected: 0
		},
		masterSword: {
			name: 'Master Sword',
			steps: [
				{value: 'missing', label: '', faded: true},
				{value: 'obtained', label: '', faded: false}
			],
			selected: 0
		}
	}
});

export const mutations = {
	INCREMENT_SELECTED(state, itemKey) {
		state.dict[itemKey].selected++;
	},
	DECREMENT_SELECTED(state, itemKey) {
		state.dict[itemKey].selected--;
	}
};

export const actions = {
	incrementSelected({commit, state}, itemKey) {
		if (state.dict[itemKey].selected < (state.dict[itemKey].steps.length - 1)) {
			commit('INCREMENT_SELECTED', itemKey)
		}
	},
	decrementSelected({commit, state}, itemKey) {
		if (state.dict[itemKey].selected > 0) {
			commit('DECREMENT_SELECTED', itemKey)
		}
	}
};

export const getters = {
	getItem: (state) => (itemKey) => {
		return state.dict[itemKey];
	}
};

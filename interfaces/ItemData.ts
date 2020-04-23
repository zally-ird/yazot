export default interface ItemDataStep {
	value: string,
	label: string,
	fade: boolean
}

export default interface ItemData {
	name: string;
	steps: ItemDataStep[];
	selected: number;
}

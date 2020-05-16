import ItemSelectionStep from "~/interfaces/ItemSelectionStep";

export default interface ItemSelection {
	steps: ItemSelectionStep[],
	index: number
}

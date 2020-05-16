<template>
	<div
		@contextmenu.prevent="onContextmenuDecrement"
		@click="onClickIncrement"
		class="item"
	>
		<img :src="imageLink">
		<p>{{getItem(selection.steps[selection.index].itemId).name}}</p>
		<h3>selected: {{selection.steps[selection.index].value}}</h3>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import {Action, Component, Getter, Prop, Provide} from "~/node_modules/nuxt-property-decorator";
	import ItemData from "~/interfaces/ItemData";
	import ItemSelection from "~/interfaces/ItemSelection";

	@Component
	export default class Item extends Vue {

		@Prop({required: true}) itemKey: string;

		@Provide() test: number = 50;

		@Getter('items/getItem') getItem: (itemId: string) => ItemData;

		@Getter('itemSelection/getSelection') getSelection: (itemKey: string) => ItemSelection;

		@Action('itemSelection/incrementSelected') incrementSelected: (itemKey: string) => void;

		@Action('itemSelection/decrementSelected') decrementSelected: (itemKey: string) => void;

		get selection(): ItemSelection {
			return this.getSelection(this.itemKey);
		}

		get imageLink() {
			return this.getItem(this.selection.steps[this.selection.index].itemId).image;
		}

		onContextmenuDecrement() {
			this.decrementSelected(this.itemKey);
		}

		onClickIncrement() {
			this.incrementSelected(this.itemKey);
		}
	}
</script>

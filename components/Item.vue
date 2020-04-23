<template>
	<div
		@contextmenu.prevent="onContextmenuDecrement"
		@click="onClickIncrement"
	>
		<p>{{item.name}}</p>
		<h3>selected: {{item.steps[item.selected].value}}</h3>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import {Action, Component, Getter, Prop, Provide} from "~/node_modules/nuxt-property-decorator";
	import ItemData from "~/interfaces/ItemData";

	@Component
	export default class Item extends Vue {

		@Prop({required: true}) itemKey: string;

		@Provide() test: number = 50;

		@Getter('items/getItem') getItem: (itemKey: string) => ItemData;

		@Action('items/incrementSelected') incrementSelected: (itemKey: string) => void;

		@Action('items/decrementSelected') decrementSelected: (itemKey: string) => void;

		get item(): ItemData {
			return this.getItem(this.itemKey);
		}

		onContextmenuDecrement() {
			this.decrementSelected(this.itemKey);
		}

		onClickIncrement() {
			this.incrementSelected(this.itemKey);
		}
	}
</script>

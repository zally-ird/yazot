<template>
	<div>
		<p>gonna be some tracker</p>
		<item item-key="kokiriSword"/>
		<item item-key="masterSword"/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import {Component, Provide} from "~/node_modules/nuxt-property-decorator";
	import Item from "~/components/Item.vue";
	import ItemData from "~/interfaces/ItemData";

	@Component({
		components: {
			Item
		}
	})
	export default class ItemTracker extends Vue {

	}
</script>

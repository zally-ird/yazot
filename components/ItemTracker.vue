<template>
	<div class="itemTracker">
		<p>gonna be some tracker</p>
		<item v-for="(key, index) in itemKeys" :key="index"
			:item-key="key"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import {Component} from "~/node_modules/nuxt-property-decorator";
	import Item from "~/components/Item.vue";
	import {Getter} from "nuxt-class-component";

	@Component({
		components: {
			Item
		}
	})
	export default class ItemTracker extends Vue {
		@Getter('itemSelection/getKeys') itemKeys: string[];

	}
</script>

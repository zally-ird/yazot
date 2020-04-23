<template>
	<div class="container">
		<item-tracker/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import {Component} from "~/node_modules/nuxt-property-decorator";
	import ItemTracker from "~/components/ItemTracker.vue";

	@Component({
		components: {
			ItemTracker
		}
	})
	export default class Index extends Vue {
	}
</script>

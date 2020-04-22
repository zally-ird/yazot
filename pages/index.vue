<template>
	<div class="container">
		<div>
			<logo/>
			<h1 class="title">
				yazot
			</h1>
			<h2 class="subtitle">
				My primo Nuxt.js project
			</h2>
			<div class="links">
				<a
					class="button--green"
					href="https://nuxtjs.org/"
					target="_blank"
				>
					Documentation
				</a>
				<a
					class="button--grey"
					href="https://github.com/nuxt/nuxt.js"
					target="_blank"
				>
					GitHub
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Logo from '~/components/Logo.vue'
	import {Component} from "~/node_modules/nuxt-property-decorator";

	@Component({
		components: {
			Logo
		}
	})
	export default class Index extends Vue {
	}
</script>

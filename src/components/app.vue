<template>
	<div class="app">
		<div class="navBarWrap">
			<header-nav-bar></header-nav-bar>
		</div>
		<div class="contentAreaWrap">
			<content-area></content-area>
		</div>
		<div class="footerWrap">
			<footer-bar></footer-bar>
		</div>
	</div>
</template>

<script>
	import store from '../vuex/store.js'
	import headerNavBar from './headerNavBar.vue'
	import contentArea from './contentArea.vue'
	import footerBar from './footerBar.vue'
  export default {
    components: {
      headerNavBar, contentArea, footerBar
    },
    store
  }
</script>


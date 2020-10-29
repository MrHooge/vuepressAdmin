<template>
	<div class="common-layout">
		<div class="content"><slot></slot></div>
		<page-footer :link-list="footerLinks" :copyright="copyright"></page-footer>
	</div>
</template>

<script lang="ts">
import PageFooter from '@/layouts/footer/PageFooter.vue';
import { mapState } from 'vuex';

import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CommonLayout',
	components: { PageFooter },
	computed: {
		...mapState('setting', ['footerLinks', 'copyright']),
	},
	setup() {
		// console.log(...mapState('setting'));

		return {};
	},
});
</script>

<style scoped lang="scss">
.common-layout {
	display: flex;
	flex-direction: column;
	height: 100vh;
	overflow: auto;
	background-color: #efefef;
	background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
	background-repeat: no-repeat;
	background-position-x: center;
	background-position-y: 110px;
	background-size: 100%;
	.content {
		padding: 32px 0;
		flex: 1;
		@media (min-width: 768px) {
			padding: 112px 0 24px;
		}
	}
}
</style>

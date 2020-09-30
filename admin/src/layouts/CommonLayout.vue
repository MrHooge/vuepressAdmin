<template>
	<div class="common-layout">
		<div class="content"><v-slot></v-slot></div>
		<page-footer :link-list="footerLinks" :copyright="copyright"></page-footer>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageFooter from '@/layouts/footer/PageFooter.vue';
import { mapState } from 'vuex';

export default defineComponent({
	name: 'CommonLayout',
	components: { PageFooter },
	computed: {
		...mapState('setting', ['footerLinks', 'copyright']),
	},
	setup() {
		return {};
	},
});
</script>

<style scoped lang="less">
.common-layout {
	display: flex;
	flex-direction: column;
	height: 100vh;
	overflow: auto;
	background-color: @layout-body-background;
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

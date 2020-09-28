<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<a-button type="primary">AButton</a-button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from 'ant-design-vue';

export default defineComponent({
	name: 'Home',
	components: {
		AButton: Button,
	},
});
</script>

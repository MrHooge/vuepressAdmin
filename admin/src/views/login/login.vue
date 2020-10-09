<template>
	<common-layout>
		<div class="top">
			<div class="header">
				<img alt="logo" class="logo" src="@/assets/logo.png" />
				<span class="title">{{ systemName }}</span>
			</div>
			<div class="desc">{{ systemName }} 个人知识管理系统</div>
		</div>
		<!-- <div class="login">
			<a-form @submit="onSubmit" :form="form">
				<a-tabs size="large" :tabBarStyle="{ textAlign: 'center' }" style="padding: 0 2px;">
					<a-tab-pane tab="账户密码登录" key="1">
						<a-alert
							type="error"
							:closable="true"
							v-show="error"
							:message="error"
							showIcon
							style="margin-bottom: 24px;"
						/>
						<a-form-item>
							<a-input
								autocomplete="autocomplete"
								size="large"
								placeholder="admin"
								v-decorator="[
									'name',
									{ rules: [{ required: true, message: '请输入账户名', whitespace: true }] },
								]"
							>
								<a-icon slot="prefix" type="user" />
							</a-input>
						</a-form-item>
						<a-form-item>
							<a-input
								size="large"
								placeholder="888888"
								autocomplete="autocomplete"
								type="password"
								v-decorator="[
									'password',
									{ rules: [{ required: true, message: '请输入密码', whitespace: true }] },
								]"
							>
								<a-icon slot="prefix" type="lock" />
							</a-input>
						</a-form-item>
					</a-tab-pane>
				</a-tabs>
				<div>
					<a-checkbox :checked="true">自动登录</a-checkbox>
					<a style="float: right">忘记密码</a>
				</div>
			</a-form>
		</div> -->
	</common-layout>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
	setup() {
		const systemName = 'VuePress Admin';

		return { systemName };
	},
});
</script>

<style lang="scss" scoped>
.top {
	text-align: center;
	.header {
		height: 44px;
		line-height: 44px;
		a {
			text-decoration: none;
		}
		.logo {
			height: 44px;
			vertical-align: top;
			margin-right: 16px;
		}
		.title {
			font-size: 33px;
			color: #161616;
			font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
			font-weight: 600;
			position: relative;
			top: 2px;
		}
	}
	.desc {
		font-size: 14px;
		color: #333333;
		margin-top: 12px;
		margin-bottom: 40px;
	}
}
.login {
	width: 368px;
	margin: 0 auto;
	@media screen and (max-width: 576px) {
		width: 95%;
	}
	@media screen and (max-width: 320px) {
		.captcha-button {
			font-size: 14px;
		}
	}
	.icon {
		font-size: 24px;
		color: #333333;
		margin-left: 16px;
		vertical-align: middle;
		cursor: pointer;
		transition: color 0.3s;

		&:hover {
			color: #1890ff;
		}
	}
}
</style>

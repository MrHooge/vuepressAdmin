<template>
    <common-layout>
        <div class="top">
            <div class="header">
                <img alt="logo" class="logo" src="@/assets/logo.png" />
                <span class="title">{{ systemName }}</span>
            </div>
            <div class="desc">{{ systemName }} 用心管理你的知识库！</div>
        </div>
        <div class="login">
            <a-form ref="formLogin" @submit="onSubmit" :model="form" :rules="formRules">
                <a-tabs size="large" :tabBarStyle="{ textAlign: 'center' }" style="padding: 0 2px;">
                    <a-tab-pane tab="账户密码登录" key="1">
                        <a-form-item>
                            <a-input size="large" v-model="form.username" placeholder="请输入用户名" allow-clear name="name">
                                <template v-slot:prefix>
                                    <UserOutlined />
                                </template>
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-input size="large" v-model="form.password" placeholder="请输入密码" allow-clear type="password" name="password">
                                <template v-slot:prefix>
                                    <LockOutlined />
                                </template>
                            </a-input>
                        </a-form-item>
                    </a-tab-pane>
                </a-tabs>

                <div>
                    <a-checkbox :checked="true">自动登录</a-checkbox>
                    <a style="float: right">忘记密码</a>
                </div>

                <a-form-item>
                    <a-button :loading="formState.logging" style="width: 100%;margin-top: 24px" size="large" html-type="submit" type="primary">登录</a-button>
                </a-form-item>
            </a-form>
        </div>
    </common-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, unref } from "vue";
import { mapState } from "vuex";
import CommonLayout from "@/layouts/CommonLayout.vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
export default defineComponent({
    components: {
        CommonLayout,
        UserOutlined,
        LockOutlined,
    },
    computed: {
        ...mapState("setting", ["systemName", "copyright"]),
    },
    setup() {
        const form = {
            username: "pkms",
            password: "pkms123",
        };
        const formState = reactive({
            loading: false,
        });
        const formRules = reactive({
            username: [
                {
                    required: true,
                    message: "请输入账号",
                    trigger: "blur",
                },
            ],
            password: [
                {
                    required: true,
                    message: "请输入密码",
                    trigger: "blur",
                },
            ],
        });
        const formLogin = ref<any>(null);

        async function onSubmit() {
            const form = unref(formLogin);
            if (!form) return;
            formState.loading = true;
            // const data = await form.validate();
        }

        return {
            formLogin,
            formState,
            onSubmit,
            formRules,
            form,
        };
    },
});
</script>

<style lang="scss" scoped>
.common-layout {
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
                font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica,
                    sans-serif;
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
}
</style>

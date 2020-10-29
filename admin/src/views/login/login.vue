<template>
<common-layout>
    <div class="top">
        <div class="header">
            <img alt="logo" class="logo" src="@/assets/logo.png" />
            <span class="title">{{ systemName }}</span>
        </div>
        <div class="desc">{{ systemName }} 个人知识管理系统</div>
    </div>
</common-layout>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import CommonLayout from '@/layouts/CommonLayout.vue';
import {
    mapState
} from 'vuex';

export default defineComponent({
    components: {
        CommonLayout,
    },
    setup() {
        const systemName = 'VuePress Admin';
        const form = {};
        const error = false;

        function onSubmit() {
            console.log('登录');
        }

        return {
            systemName,
            onSubmit,
            form,
            error
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
}
</style>

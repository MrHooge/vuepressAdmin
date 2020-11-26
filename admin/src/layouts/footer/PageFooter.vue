<template>
    <div class="footer">
        <div class="links">
            <a target="_blank" :key="index" :href="item.link ? item.link : 'javascript: void(0)'" v-for="(item, index) in linkList">
                <icon-font v-if="item.icon" :type="'icon-' + item.icon" />{{ item.name }}
            </a>
        </div>
        <div class="copyright">Copyright
            <CopyrightCircleOutlined /> {{ copyright }}
        </div>
    </div>
</template>

<script>
import { CopyrightCircleOutlined, createFromIconfontCN } from '@ant-design/icons-vue';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
export default {
    name: 'PageFooter',
    components: {
        CopyrightCircleOutlined,
        IconFont,
    },
    props: ['copyright', 'linkList'],
};
</script>

<style lang="scss" scoped>
.footer {
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;

    .copyright {
        color: #161616;
        font-size: 14px;
    }

    .links {
        margin-bottom: 8px;

        a:not(:last-child) {
            margin-right: 40px;
        }

        a {
            color: #161616;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
        }
    }
}
</style>

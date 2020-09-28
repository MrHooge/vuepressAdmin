<template>
    <a-config-provider :locale="locale">
    <router-view/>
  </a-config-provider>
</template>

<script lang="ts">

    import { reactive, toRefs } from '@vue/composition-api'

    export default {
        setup () {
            const state = reactive({
                count: 0,
            })

            return {
                ...toRefs(state),
            }
        }
    }
</script>

<style lang="scss">

</style>

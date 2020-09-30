<template>
  <common-layout>
    <div class="top">
      <div class="header">
        <img alt="logo" class="logo" src="@/assets/img/logo.png" />
        <span class="title">{{ systemName }}</span>
      </div>
      <div class="desc">{{ systemName }} 最好用的个人知识库管理系统</div>
    </div>
  </common-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CommonLayout from "@/layouts/CommonLayout.vue";

export default defineComponent({
  components: { CommonLayout },
  setup() {
    const systemName = "Vuepress Admin";
    return { systemName };
  }
});
</script>

<style scoped></style>

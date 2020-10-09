<template>
  <div class="footer">
    <div class="links">
      <a target="_blank" :key="index" :href="item.link ? item.link : 'javascript: void(0)'" v-for="(item, index) in linkList">
        <a-icon v-if="item.icon" :type="item.icon"/>{{item.name}}
      </a>
    </div>
    <div class="copyright">
      Copyright<a-icon type="copyright" />{{copyright}}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageFooter',
  props: ['copyright', 'linkList']
});
</script>
<script>

<style  scoped>
</style>

<template>
  <li>
    <span>{{ content.title }}</span>
    <ul>
      <li v-for="item, index in content.items" :key="index">
        <span>{{ item.title }}</span>
        <a :href="item.value" target="_blank">{{ item.label }}</a>
      </li>
    </ul>
  </li>
</template>
<script lang="ts">
import type { TranslationAboutContent } from '@/types/language';
import type { PropType } from 'vue';

export default {
  props: {
    content: {
      type: Object as PropType<TranslationAboutContent>,
      required: true
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

li {
  @apply bg-base-100 rounded-box p-2;
  @apply flex flex-col gap-4;
}

li>ul {
  @apply flex flex-col gap-2;
}

li>ul>li {
  @apply flex flex-row justify-between;
  @apply bg-base-200 p-2 rounded-field;
}
</style>

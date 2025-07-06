<template>
  <div class="content" :class="{ 'bg-base-300': level % 2 == 0, 'bg-base-200': level % 2 == 1 }">
    <component :is="`h${level}`">{{ content.title }}</component>
    <div class="content-paragraphs">
      <template v-for="paragraph, index in content.paragraphs" :key="index">
        <p v-html="paragraph" />
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import type { TranslationContent } from '@/types/language';
import type { PropType } from 'vue';

export default {
  props: {
    level: {
      type: Number,
      default: 2
    },
    content: {
      type: Object as PropType<TranslationContent>,
      required: true
    }
  }
}
</script>

<style scoped>
@reference "@/assets/main.css";

.content {
  @apply rounded-box p-4;
  @apply flex flex-col gap-2;
}

.content .content-paragraphs {
  @apply flex flex-col gap-2;
  @apply rounded-box p-2 m-0;
}

.content .content-paragraphs p {
  @apply rounded-box m-0;
}
</style>

<template>
  <div class="content-group" :class="{ 'bg-base-300': level % 2 == 0, 'bg-base-200': level % 2 == 1 }">
    <img v-if="content.image" :src="content.image" alt="image">
    <component :is="`h${level}`">{{ content.title }}</component>
    <p v-if="content.description" v-html="content.description" class="description" />
    <div class="content-group-items">
      <template v-for="item, i in content.items" :key="i">
        <template v-if="'items' in item">
          <CContenGroup :level="level + 1" :content="item" />
        </template>
        <template v-else-if="'paragraphs' in item">
          <CContent :level="level + 1" :content="item" />
        </template>
        <template v-else>
          {{ item }}
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import type { TranslationGroupContent } from '@/types/language';
import { defineAsyncComponent, type PropType } from 'vue';

export default {
  name: "CContenGroup",
  components: {
    CContenGroup: () => import('@/components/common/cContenGroup.vue'),
    CContent: defineAsyncComponent(() => import('@/components/common/cContent.vue')),
  },
  props: {
    level: {
      type: Number,
      default: 2
    },
    content: {
      type: Object as PropType<TranslationGroupContent>,
      required: true
    }
  }
}
</script>

<style scoped>
@reference "@/assets/main.css";

.content-group {
  @apply rounded-box p-4;
  @apply flex flex-col gap-2;
}

.content-group .content-group-items {
  @apply rounded-box p-2;
  @apply flex flex-col gap-2;
}
</style>

<template>
  <main>
    <CContenGroup :level="2" :content="info" />
  </main>
</template>

<script lang="ts">
import { useLanguageStore } from '@/stores/language';
import type { TranslationGroupContent } from '@/types/language';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    CContenGroup: defineAsyncComponent(() => import("@/components/common/cContenGroup.vue"))
  },
  data() {
    return {
      languageStore: useLanguageStore()
    }
  },
  computed: {
    info() {
      return this.languageStore.content.info as TranslationGroupContent
    }
  }
}
</script>

<style scoped>
@reference "@/assets/main.css";

main {
  @apply prose;
  @apply w-full h-full p-4 mt-0;
  @apply flex justify-start items-start;
}
</style>

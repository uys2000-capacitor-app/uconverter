<template>
  <section>
    <ul>
      <template v-for="(item, index) in aboutItems" :key="index">
        <CAboutContent :content="item" />
      </template>
    </ul>
  </section>
</template>

<script lang="ts">
import { useLanguageStore } from '@/stores/language';
import type { TranslationAboutContent } from '@/types/language';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    CAboutContent: defineAsyncComponent(() => import("@/components/common/cAboutContent.vue"))
  },
  data() {
    return {
      languageStore: useLanguageStore()
    }
  },
  computed: {
    aboutItems() {
      return this.languageStore.content.about as TranslationAboutContent[]
    }
  }
}
</script>

<style scoped>
@reference '@/assets/main.css';

section {
  @apply h-full overflow-auto;
}

section>ul {
  @apply flex flex-col gap-2;
}
</style>

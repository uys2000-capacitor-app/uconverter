<template>
  <main>
    <DAccordion class="bg-base-200 mb-auto" name="home" checked>
      <template #title>{{ languageStore.content.converterTitle }}</template>
      <template #content>
        <HConverter />
      </template>
    </DAccordion>
    <DAccordion class="bg-base-200" name="home">
      <template #title>{{ languageStore.content.infoTitle }}</template>
      <template #content>
        <HInfo />
      </template>
    </DAccordion>
    <DAccordion class="bg-base-200" name="home">
      <template #title>{{ languageStore.content.aboutTitle }}</template>
      <template #content>
        <HAbout />
      </template>
    </DAccordion>
  </main>
</template>

<script lang="ts">
import { useLanguageStore } from '@/stores/language';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    DAccordion: defineAsyncComponent(() => import('@/components/daiys/dAccordion.vue')),
    HConverter: defineAsyncComponent(() => import('@/components/home/hConverter.vue')),
    HInfo: defineAsyncComponent(() => import('@/components/home/hInfo.vue')),
    HAbout: defineAsyncComponent(() => import('@/components/home/hAbout.vue')),
  },
  data() {
    return {
      languageStore: useLanguageStore()
    }
  },
}
</script>

<style scoped>
@reference '@/assets/main.css';

main {
  @apply w-full h-full overflow-auto p-4 mt-12;
  @apply flex flex-col items-center justify-start gap-2;
}
</style>

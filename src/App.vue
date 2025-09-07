<template>
  <template v-if="languageStore.content.info">
    <RouterView v-slot="{ Component }">
      <Transition name="layout">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </template>
</template>

<script lang="ts">
import { Transition } from 'vue';
import { RouterView } from 'vue-router'
import { hideSplashScreen } from './services/capacitor/splashScreen';
import { useLanguageStore } from './stores/language';
import { getLanguageCode } from './services/capacitor/device';
import { initializeAdMob, showAdMobBanner } from './services/capacitor/addmob';
import { useAppStore } from './stores/app';

export default {
  components: { RouterView, Transition },
  data() {
    return {
      languageStore: useLanguageStore(),
      appStore: useAppStore()
    }
  },
  methods: {
    async initBanner() {
      await initializeAdMob()
      showAdMobBanner(() => {
        this.appStore.adMobLoaded = true
      })
    }
  },
  async mounted() {
    const language = await getLanguageCode()
    this.languageStore.set(language as "tr" | "en")
    this.initBanner()
    hideSplashScreen()
  }
}
</script>

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

export default {
  components: { RouterView, Transition },
  data() {
    return {
      languageStore: useLanguageStore(),
    }
  },
  async mounted() {
    const language = await getLanguageCode()
    console.log(language)
    this.languageStore.set(language as "tr" | "en")
    hideSplashScreen()
  }
}
</script>

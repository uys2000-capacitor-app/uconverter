<template>
  <div id="layout" :class="{ ad: appStore.adMobLoaded }">
    <TheHeader />
    <div id="layout-content">
      <RouterView v-slot="{ Component }">
        <Transition name="layout">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<script lang="ts">
import { useAppStore } from '@/stores/app';
import { defineAsyncComponent, Transition } from 'vue';
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView, Transition,
    TheHeader: defineAsyncComponent(() => import('@/components/shared/TheHeader.vue')),
  },
  data() {
    return {
      appStore: useAppStore()
    }
  }
}
</script>

<style scoped>
@reference "@/assets/main.css";

#layout,
#layout-content {
  @apply flex flex-col;
  @apply overflow-hidden;
}

#layout {
  @apply h-screen w-screen;
  height: 100dvh;
  width: 100dvw;
}

#layout.ad {
  @apply pb-12;
}

#layout-content {
  @apply h-full min-w-full;
}
</style>

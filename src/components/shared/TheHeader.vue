<template>
  <header>
    <slot>UConverter</slot>
  </header>
</template>

<style scoped>
@reference "@/assets/main.css";

header {
  @apply fixed top-0 left-1/2 -translate-x-1/2 z-10;
  @apply w-fit h-fit px-4 py-2 mx-auto;
  @apply bg-base-200 rounded-b-box;
  @apply flex justify-center;
}
</style>

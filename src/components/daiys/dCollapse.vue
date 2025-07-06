<template>
  <div tabindex="0" class="collapse">
    <input type="checkbox" />
    <div class="collapse-title">
      <slot name="title" />
    </div>
    <div class="collapse-content">
      <slot name="content" />
    </div>
  </div>
</template>

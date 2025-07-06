<template>
  <div tabindex="0" class="collapse min-h-14">
    <input type="radio" :name="name" :checked="checked" unselectable="on" />
    <div class="collapse-title">
      <slot name="title" />
    </div>
    <div class="collapse-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      default: "accordion"
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

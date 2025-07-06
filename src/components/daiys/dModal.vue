<template>
  <dialog :id="id" class="modal">
    <div class="modal-box  max-w-3/4 max-h-5/6 overflow-auto">
      <slot />
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      default: "modal"
    }
  }
}
</script>

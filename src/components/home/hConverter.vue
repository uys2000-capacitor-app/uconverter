<template>
  <section>
    <div class="form-control">
      <label>
        <span>{{ content.selectFile }}</span>
      </label>
      <input type="file" @change="onChange" />
      <p v-if="ufile.name" class="text-sm mt-2">
        {{ content.selectedFile }}: <strong>{{ ufile.name }}.{{ ufile.extension }}</strong>
      </p>
    </div>

    <div class="form-control">
      <label>
        <span>{{ content.targetFormat }}</span>
      </label>
      <select v-model="ufile.target">
        <template v-for="(option, index) in options" :key="index">
          <option :value="option">{{ option }}</option>
        </template>
        <option value="other">{{ content.otherFormat }}</option>
      </select>
      <input v-if="ufile.target == 'other'" type="text" v-model="otherFormat">
    </div>

    <button @click="onSubmit">
      {{ content.convertButton }}
    </button>

    <div class="loading-wrapper" v-if="onPrgress">
      <span></span>
    </div>

    <div class="download-wrapper" v-if="url">
      <template v-if="isNative">
        <a @click="writeFile">{{ content.downloadFile }}</a>
      </template>
      <template v-else>
        <a :href="url" :download="name" target="_blank">{{ content.downloadFile }}</a>
      </template>
      <button onclick="logs.showModal()">{{ content.logsButton }}</button>
    </div>
    <DModal id="logs">
      <template v-for="log, index in logs" :key="index">
        <p class="text-nowrap border-b w-max block">{{ log }}</p>
      </template>
    </DModal>
  </section>
</template>

<script lang="ts">
import { convert, uint8ToBase64 } from "@/services/app/converter";
import { isNativePlatform } from "@/services/capacitor/core";
import { getPathInfo, writeFile } from "@/services/capacitor/fileSystem";
import { share } from "@/services/capacitor/share";
import { useLanguageStore } from "@/stores/language";
import type { UFile } from "@/types/converter";
import { defineAsyncComponent } from "vue";
export default {
  components: {
    DModal: defineAsyncComponent(() => import("@/components/daiys/dModal.vue"))
  },
  data() {
    return {
      formats: {
        video: [
          "mp4", "webm", "mkv", "avi", "mov", "flv", "wmv",
          "mpeg", "3gp", "gif", "ts", "m4v", "asf"
        ],
        audio: [
          "mp3", "aac", "wav", "ogg", "flac", "m4a", "opus", "wma", "amr", "alac"
        ],
        image: [
          "png", "jpg", "jpeg", "webp", "bmp", "tiff", "gif", "ppm", "pgm", "pbm"
        ]
      },
      blob: null as Blob | null,
      data: null as Uint8Array<ArrayBufferLike> | null,
      languageStore: useLanguageStore(),
      logs: [] as string[],
      onPrgress: false,
      ufile: {} as UFile,
      otherFormat: "",
      url: "",
      name: "",
    }
  },
  computed: {
    content() {
      return this.languageStore.content.converter as Record<string, string>
    },
    options() {
      if (this.formats.audio.includes(this.ufile.extension))
        return this.formats.audio;
      if (this.formats.video.includes(this.ufile.extension))
        return this.formats.video;
      if (this.formats.image.includes(this.ufile.extension))
        return this.formats.image;
      return [];
    },
    isNative() {
      return isNativePlatform()
    }
  },
  methods: {
    resetOldConvert() {
      this.url = ""
      this.name = ""
      this.logs = []
    },
    onChange(e: Event) {
      const input = e.target as HTMLInputElement;
      const file = input.files![0]
      this.ufile.file = file;
      const fileNameParts = file.name.split(".")
      if (fileNameParts.length > 1) {
        this.ufile.extension = fileNameParts.pop() as string;
        this.ufile.name = fileNameParts.join("")
      }
    },
    async onSubmit() {
      if (this.onPrgress) return;
      if (!this.ufile.file) return;
      this.onPrgress = true;
      this.resetOldConvert()
      try {
        const { blob, data, url, name, logs } = await convert(this.ufile)
        if (url) {
          if (blob) this.blob = blob
          if (data) this.data = data
          this.url = url
          this.name = name
          this.logs = logs
        }
      } catch (e) {
        console.log(e)
        this.logs = [e as string]
      }
      this.onPrgress = false
    },
    async writeFile() {
      if (this.blob && this.data) {
        await writeFile(this.name, uint8ToBase64.uLog(this.data))
        const path = await getPathInfo(this.name)
        share("", path.uri)
      }
    }
  }
}

</script>

<style scoped>
@reference '@/assets/main.css';

section {
  @apply overflow-hidden;
  @apply max-w-full w-full;
  @apply flex flex-col gap-4;
  @apply mb-auto p-4;
}

section .form-control {
  @apply bg-base-300 text-base-content;
  @apply rounded-box p-2;
  @apply flex flex-col gap-2;
}

section .form-control label {
  @apply label;
}

section .form-control label>span {
  @apply font-semibold;
}

section .form-control input[type='file'] {
  @apply file-input w-full;
}

section .form-control select {
  @apply select select-secondary w-full;
}

section .form-control input[type='text'] {
  @apply input w-full;
}

section>button {
  @apply btn btn-accent w-full;
}

section .loading-wrapper {
  @apply text-center;
}

section .loading-wrapper span {
  @apply loading loading-spinner loading-md text-primary;
}

section .download-wrapper {
  @apply relative w-full text-center;
}

section .download-wrapper a {
  @apply btn btn-success;
}

section .download-wrapper button {
  @apply btn btn-warning absolute right-0;
}
</style>

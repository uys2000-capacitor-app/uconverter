import { isNativePlatform } from '@/services/capacitor/core'
import type { TranslationContents } from '@/types/language'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state() {
    return {
      language: 'tr',
      content: {} as TranslationContents,
    }
  },
  actions: {
    async setAppLanguage(value: string) {
      switch (value.toLocaleLowerCase()) {
        case 'tr':
          this.content = (await import('@/assets/language/app/tr')).default
          break
        default:
          this.content = (await import('@/assets/language/app/en')).default
      }
    },
    async setWebLanguage(value: string) {
      switch (value.toLocaleLowerCase()) {
        case 'tr':
          this.content = (await import('@/assets/language/web/tr')).default
          break
        default:
          this.content = (await import('@/assets/language/web/en')).default
      }
    },
    set(value: string) {
      this.language = value
      if (isNativePlatform()) this.setAppLanguage(value)
      else this.setWebLanguage(value)
    },
  },
})

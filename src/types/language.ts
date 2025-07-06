export interface TranslationContent {
  title: string
  paragraphs: string[]
}

export interface TranslationGroupContent {
  title: string
  description?: string
  image?: string
  items: Array<TranslationGroupContent | TranslationContent>
}

export interface TranslationAboutContent {
  title: string
  items: Array<TranslationAboutContentItem>
}
export interface TranslationAboutContentItem {
  title: string
  label: string
  value: string
}

export interface TranslationContents {
  [key: string]:
    | TranslationGroupContent
    | TranslationAboutContent[]
    | string
    | Record<string, string>
}

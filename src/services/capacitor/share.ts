import { Share } from '@capacitor/share'

export const share = (title: string, url: string) => {
  return Share.share({
    title: title,
    url: url,
  })
}

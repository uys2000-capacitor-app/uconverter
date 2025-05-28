import { Capacitor } from '@capacitor/core'

export const getPlatform = () => {
  return Capacitor.getPlatform()
}

export const isNativePlatform = () => {
  return Capacitor.isNativePlatform()
}

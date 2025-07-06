import { Device } from '@capacitor/device'

export const getLanguageCode = async () => {
  const { value } = await Device.getLanguageCode()
  return value
}

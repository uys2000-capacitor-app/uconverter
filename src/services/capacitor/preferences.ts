import { Preferences } from '@capacitor/preferences'

export const setPrefence = (key: string, value: string) => {
  return Preferences.set({
    key: key,
    value: value,
  })
}
export const setPrefenceObject = (key: string, value: object) => {
  return Preferences.set({
    key: key,
    value: JSON.stringify(value),
  })
}

export const getPrefence = async (key: string) => {
  const { value } = await Preferences.get({ key: key })
  return value
}

export const getPrefenceObject = async <T>(key: string) => {
  const { value } = await Preferences.get({ key: key })
  if (value) return JSON.parse(value) as T
  return null
}

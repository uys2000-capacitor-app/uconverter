import { SplashScreen } from '@capacitor/splash-screen'

export const hideSplashScreen = () => {
  return SplashScreen.hide()
}

export const showSplashScreen = (showDuration: number = 0) => {
  return SplashScreen.show({ autoHide: showDuration <= 0, showDuration })
}

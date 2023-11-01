import { CapacitorConfig } from '@capacitor/cli';


const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'KinderJoy',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
  },
};

export default config;

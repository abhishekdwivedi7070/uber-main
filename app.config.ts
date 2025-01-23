import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "YourAppName",
  slug: "your-app-slug",
  sdkVersion: "52.0.0", // or your specific version
  platforms: ["ios", "android", "web"],
  assetBundlePatterns: ["**/*"],
  // Add other necessary configurations, like app icon, splash screen, etc.
});

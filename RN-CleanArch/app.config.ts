import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  type Environment = 'development' | 'staging';

  const env = (process.env.ENVIRONMENT as Environment) || 'development';

  const flavorSettings = {
    development: {
      name: 'App Dev',
      slug: 'app-dev',
      androidPackage: 'com.jommaa.MyGlobe.dev',
      iosBundleId: 'com.jommaa.MyGlobe.dev',
    },
    staging: {
      name: 'App Staging',
      slug: 'app-staging',
      androidPackage: 'com.jommaa.MyGlobe.stage',
      iosBundleId: 'com.jommaa.MyGlobe.stage',
    },
  };

  const flavor = flavorSettings[env];

  return {
    ...config,
    name: flavor.name,
    slug: flavor.slug,
    android: {
      package: flavor.androidPackage,
    },
    ios: {
      bundleIdentifier: flavor.iosBundleId,
    },
    extra: {
      ENVIRONMENT: env,
    },
  };
};
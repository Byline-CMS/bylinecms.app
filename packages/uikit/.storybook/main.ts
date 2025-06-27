import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from '@storybook/react-vite'
const require = createRequire(import.meta.url);
const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-a11y"), {
    name: getAbsolutePath("@storybook/addon-themes"),
    options: {
      // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
      // For more details on this addon's options.
      // postCss: true,
    }
  }, getAbsolutePath("@storybook/addon-docs")],

  // viteFinal: async (config) => {
  //   config.css = {
  //     modules: {
  //       localsConvention: 'camelCaseOnly'
  //     }
  //   }

  //   return config
  // },
  //👈 Configures the static asset folder in Storybook
  staticDirs: ['../public']
}
export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

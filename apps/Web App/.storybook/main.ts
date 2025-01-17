import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-themes",
    '@storybook/addon-mdx-gfm'
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  docs: {},

  staticDirs: ["../public"],

  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@ui': path.resolve(__dirname, '../src/components/ui'),
        '@layout': path.resolve(__dirname, '../src/components/layout'),
        '@story': path.resolve(__dirname, '../src/components/story'),
        '@Sui': path.resolve(__dirname, '../src/components/story/ui'),
        '@Slay': path.resolve(__dirname, '../src/components/story/layout'),
        '@load': path.resolve(__dirname, '../src/components/story/ui/loaders'),
        '@pre': path.resolve(__dirname, '../src/components/presets')
      };
    }
    
    return config;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
export default config;

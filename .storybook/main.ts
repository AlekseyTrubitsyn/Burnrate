import type { StorybookConfig } from "@storybook/nextjs"
import type { RuleSetRule } from "webpack"

const config: StorybookConfig = {
  webpackFinal: async (config) => {
    // Remove existing SVG file-loader rule
    const fileLoaderRule = config.module?.rules?.find(
      (rule) => rule && typeof rule === "object" && (rule as RuleSetRule).test instanceof RegExp && ((rule as RuleSetRule).test as RegExp).test(".svg")
    )
    if (fileLoaderRule && typeof fileLoaderRule === "object") {
      (fileLoaderRule as RuleSetRule).exclude = /\.svg$/
    }

    // Add SVGR rule
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
  stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-docs"],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
}
export default config

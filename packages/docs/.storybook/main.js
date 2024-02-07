import { dirname, join } from "path";
module.exports = {
  "stories": [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],

  "addons": [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y")
  ],

  "framework": getAbsolutePath("@storybook/react"),

  "core": {
    "builder": getAbsolutePath("@storybook/builder-vite")
  },

  "features": {
    "storyStoreV7": true
  },

  docs: {
    autodocs: true
  }
}

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
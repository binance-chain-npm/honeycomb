const visualizer = require('rollup-plugin-visualizer');
const typescript = require('rollup-plugin-typescript2');
const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup').default;

const svgTemplate = require('./svg.template');

module.exports = {
  rollup(config, options) {
    const tsPluginIndex = config.plugins.findIndex((it) => it.name === 'rpt2');
    if (!tsPluginIndex) {
      throw new Error('`rollup-plugin-typescript2` was not found in the plugin list');
    }

    return {
      ...config,
      plugins: [
        url({
          include: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.otf', '**/*.svg'],
          limit: Infinity,
        }),
        svgr({
          expandProps: 'end',
          template: svgTemplate,
          svgoConfig: {
            plugins: [
              { sortAttrs: true },
              { removeViewBox: false },
              { removeDimensions: true },
              { convertColors: { currentColor: true } },
            ],
          },
        }),
        ...config.plugins.slice(0, tsPluginIndex),
        typescript({
          typescript: require('typescript'),
          cacheRoot: `./node_modules/.cache/tsdx/${options.format}/`,
          tsconfig: options.tsconfig,
          tsconfigDefaults: {
            compilerOptions: {
              sourceMap: true,
              declaration: true,
              jsx: 'react',
              target: 'es5',
            },
          },
          check: options.transpileOnly === false,
          objectHashIgnoreUnknownHack: true,
        }),
        ...config.plugins.slice(tsPluginIndex + 1),
        visualizer({
          template: 'sunburst',
          filename: `stats.${[options.format, options.env].filter((it) => !!it).join('.')}.html`,
        }),
      ],
    };
  },
};

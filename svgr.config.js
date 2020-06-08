module.exports = {
  expandProps: 'end',
  template: function template({ template }, opts, { imports, componentName, props, jsx, exports }) {
    return template.ast`
      import styled from 'styled-components';
      ${imports}

      const SvgComponent = (${props}) => ${jsx}
      const ${componentName} = styled(SvgComponent)\`;
        width: auto;
        height: 1em;
        fill: currentColor;
      \`

      ${exports}
    `;
  },
  svgoConfig: {
    plugins: [{ sortAttrs: true }, { removeViewBox: false }, { removeDimensions: true }],
  },
};

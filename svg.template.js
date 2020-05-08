module.exports = function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports },
) {
  return template.ast`
    import styled from 'styled-components';
    ${imports}

    const SvgComponent = (${props}) => ${jsx}
    const ${componentName} = styled(SvgComponent)\`;
      width: 1em;
      height: 1em;
      fill: currentColor;
    \`

    ${exports}
  `;
};

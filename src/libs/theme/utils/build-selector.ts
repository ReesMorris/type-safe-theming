export const buildSelector = (
  cssRule: string,
  themeName?: string,
  isDefaultTheme?: boolean
) => {
  let css = ``;

  if (isDefaultTheme || !themeName) {
    css += `:root`;
  }

  if (themeName) {
    css += `,:root[data-theme="${themeName}"]`;
  }

  return `${css} { ${cssRule} } `;
};

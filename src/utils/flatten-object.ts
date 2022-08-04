export const flattenObject = <T extends Record<string, any>>(
  object: T,
  { separator = '-' } = {}
): Record<string, any> => {
  const flatten = (object: T, path?: string): Record<string, any> => {
    return Object.entries(object).reduce((acc, [key, val]) => {
      if (val === undefined) return acc;
      if (path) key = `${path}${separator}${key}`;
      if (
        typeof val === 'object' &&
        val !== null &&
        !(val instanceof Date) &&
        !(val instanceof RegExp) &&
        !Array.isArray(val)
      ) {
        if (val !== val.valueOf()) {
          return { ...acc, [key]: val.valueOf() };
        }
        return { ...acc, ...flatten(val, key) };
      }
      return { ...acc, [key]: val };
    }, {});
  };

  return flatten(object);
};

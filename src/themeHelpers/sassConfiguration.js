function stringColorToNumber(color) {
  if (color.startsWith('#')) return hexToRGBA(color);
  else if (color.startsWith('rgba')) return rgbaToNumber(color);
  throw new Error('Unknown color type')
}

function hexToRGBA(hex) {
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) throw new Error(`Invalid hex: ${hex}`)

  let c = hex.substring(1).split('')
  if (c.length == 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]]
  }
  c = `0xff${c.join('')}`
  return Number(c)
}

function rgbaToNumber(rgba) {
  const colors = rgba.replace('rgba', '').replace('(', '').replace(')', '').replace(' ', '').split(',');
  return Number((Number(colors[0]) << 24) + (Number(colors[1]) << 16) + (Number(colors[2]) << 8) + (Number(colors[3])));
}

function sassOverriderByTheme({ theme, sassUtils, sass }) {
  return {
    functions: {
      "get($keys)": function(keys) {
        keys = keys.getValue().split(".");
        let result = theme;
        for (let i = 0; i < keys.length; i++) {
          result = result[keys[i]];
          if (typeof result === "object") {
            Object.keys(result).forEach(function(key) {
              let value = result[key];
              result[key] = value;
            });
          }
        }

        result = result ? sass.types.Color(stringColorToNumber(result)) : sassUtils.castToSass(result);
        return result;
      }
    }
  };
}

module.exports = { sassOverriderByTheme };

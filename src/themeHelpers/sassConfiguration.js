
function sassOverriderByTheme({ theme, sassUtils, sass }) {

  function hexToSassColor(hex) {
    if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) throw new Error(`Invalid hex: ${hex}`)
  
    let c = hex.substring(1).split('')
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = `0xff${c.join('')}`
    return sass.types.Color(Number(c))
  }

  function stringColorToNumber(color) {
    if (color.startsWith('#')) return hexToSassColor(color);
    else if (color.startsWith('rgba')) return rgbaToSassColor(color);
    throw new Error('Unknown color type')
  }
  
  function rgbaToSassColor(rgba) {
    const colors = rgba.replace('rgba', '').replace('(', '').replace(')', '').replace(' ', '').split(',');
    return sass.types.Color(...colors.map(Number));
  }

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

        result = result ? stringColorToNumber(result) : sassUtils.castToSass(result);
        return result;
      }
    }
  };
}

module.exports = { sassOverriderByTheme };

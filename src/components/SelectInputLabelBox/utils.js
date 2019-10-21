export function isValued(value) {
  if(value === undefined || value === null) return false;
  else if (typeof value === 'boolean') return true;
  else if (typeof value === 'number') return true;
  else if (typeof value === 'string' && value.length > 0) return true;
  else if (Array.isArray(value) && value.length > 0) return true;
  else if (typeof x === 'symbol') return true;

  return typeof value === 'object' && Object.keys(value) > 0;
}

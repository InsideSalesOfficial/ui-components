import _ from 'lodash';

export function isValued(value) {
  if(_.isNil(value)) return false;
  if(_.isBoolean(value)) return true;
  if(_.isNumber(value)) return true;
  return !_.isEmpty(value)
}

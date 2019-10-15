export * from './boxShadows';
export * from './colors';
export * from './scrollbars';
export * from './typography';

export function generateFlexedThemeBackground(props, otherStyles) {
  return { background: props.theme.primary01, ...otherStyles, display: 'flex', alignItems: 'center' };
};

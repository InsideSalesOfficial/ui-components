export * from './boxShadows';
export * from './colors';
export * from './scrollbars';
export * from './typography';

export function generateFlexedThemeBackground(props, { height }) {
  return { background: props.theme.primary01, height: height, display: 'flex', alignItems: 'center' };
};

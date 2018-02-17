
const COLOR_MAP = {
  unset: 'light-3',
  'graph-1': 'neutral-1',
  'graph-2': 'neutral-2',
  'graph-3': 'neutral-3',
  'graph-4': 'accent-1',
  'graph-5': 'accent-2',
};

/* eslint-disable import/prefer-default-export */
export const colorIndexToColor = colorIndex => (
  COLOR_MAP[colorIndex] || colorIndex
);

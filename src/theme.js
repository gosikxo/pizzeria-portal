// src/ui/theme/index.js

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#F48FB1' },
  secondary: { main: '#81D4FA' },
};
const themeName = 'Mauvelous Malibu Goose';

export default createMuiTheme({ palette, themeName });

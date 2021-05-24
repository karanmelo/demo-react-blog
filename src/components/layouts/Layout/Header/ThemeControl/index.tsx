import { useTheme } from '../../../../../hooks/theme';

import Checkbox from './Checkbox';

const ThemeControl: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const checked: boolean = theme.name === 'light';

  return (
    <Checkbox checked={checked} onChange={() => toggleTheme()} />
  );
}

export default ThemeControl;
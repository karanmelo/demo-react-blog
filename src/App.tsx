import Layout from './components/layouts/Layout';
import GlobalStyles from './styles/global';
import { CustomThemeProvider } from './hooks/theme';

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <Layout />
      <GlobalStyles />
    </ CustomThemeProvider>
  );
}

export default App;

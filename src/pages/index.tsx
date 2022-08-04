import { Button } from '../components/button/button';
import { useTheme } from '../libs/theme/provider/provider';

const Home = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      color='body.text'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Hello
    </Button>
  );
};

export default Home;

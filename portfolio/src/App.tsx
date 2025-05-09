import {
  Box
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { themeDark } from './themeDark.tsx';
// import { themeLight } from './themeLight.tsx';

//Components
import ComponentSlider from './ComponentSlider.tsx';
import Introducation from './pages/FirstSlide.tsx';
import FirstWebsite from './pages/SecondSlide.tsx';
import SecondWebsite from './pages/thirdSlide.tsx';

function App() {

  const components = [
    <Introducation/>,
    <FirstWebsite/>,
    <SecondWebsite/>
  ]

  return (
    <ThemeProvider theme={themeDark}>
      <Box
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh',
        }}
      >
        <ComponentSlider components={components}/>
      </Box>
    </ThemeProvider>
  )
}

export default App

import {
  Box
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { themeDark } from './themeDark.tsx';
import { useState } from 'react';
import { themeLight } from './themeLight.tsx';

//Components
import ComponentSlider from './ComponentSlider.tsx';
import Introducation from './pages/FirstSlide.tsx';
import FirstWebsite from './pages/SecondSlide.tsx';
import SecondWebsite from './pages/thirdSlide.tsx';

function App() {
  const [currentLang, setCurrentLang] = useState<"Swe" | "Eng">("Eng")  
  const [currentMode, setCurrentMode] = useState<"Dark" | "Light">("Dark")

  const components = [
    <Introducation lang={currentLang}/>,
    <FirstWebsite lang={currentLang}/>,
    <SecondWebsite lang={currentLang}/>
  ]

  return (
    <ThemeProvider theme={currentMode == "Dark" ? themeDark : themeLight}>
      <Box
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh',
        }}
      >
        <ComponentSlider
          components={components}
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
        />
      </Box>
    </ThemeProvider>
  )
}

export default App

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
import SecondWebsite from './pages/ThirdSlide.tsx';
import Technologies from './pages/FourthSlide.tsx';
import Conclusion from './pages/FifthSlide.tsx';

function App() {
  const [currentLang, setCurrentLang] = useState<"Swe" | "Eng">("Eng")  
  const [currentMode, setCurrentMode] = useState<"Dark" | "Light">("Light")

  const components = [
    <Introducation lang={currentLang}/>,
    <FirstWebsite lang={currentLang}/>,
    <SecondWebsite lang={currentLang}/>,
    <Technologies lang={currentLang}/>,
    <Conclusion lang={currentLang}/>
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

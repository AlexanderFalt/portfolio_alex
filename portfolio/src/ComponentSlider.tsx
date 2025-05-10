// ComponentSlider.tsx
import React, { useState } from 'react'
import {
  Box,
  IconButton,
  useTheme,
  Button
} from '@mui/material'
import {
  ArrowBackIos,
  ArrowForwardIos,
} from '@mui/icons-material'
import LinearProgress from '@mui/material/LinearProgress';

type Lang = "Swe" | "Eng";
type Mode = "Dark" | "Light";

interface ComponentSliderProps {
  components: React.ReactElement[]; // Ensure this is explicitly typed as ReactNode[]
  currentLang: Lang;
  setCurrentLang: React.Dispatch<React.SetStateAction<Lang>>;
  currentMode: Mode;
  setCurrentMode: React.Dispatch<React.SetStateAction<Mode>>;
}

export default function ComponentSlider({ components, currentLang, setCurrentLang, currentMode, setCurrentMode }: ComponentSliderProps) {
  const theme = useTheme()
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(100 / components.length)

  if(progress > 100 || progress < 100 / components.length) {
    setProgress( 100 / components.length )
  }

  const showNext = () => {
    setActiveIndex(i => (i === components.length - 1 ? 0 : i + 1))
    const newProgress = progress + 100 / components.length
    setProgress(newProgress)
  }

  const showPrev = () => {
    setActiveIndex(i => (i === 0 ? components.length - 1 : i - 1))
    const newProgress = progress - 100 / components.length
    setProgress(newProgress)
  }

  return (
    <Box
      component="section"
      aria-label="Component Slider"
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

    {/* Progress Bar */}
    <Box sx={{
      width: "100%", 
      position: "absolute", 
      top: "2%", 
      left: "0%", 
      display: "flex", 
      justifyContent: "space-evenly", 
      alignItems: "center",
      zIndex: 10,            // <-- lift it above the transformed slide
      p: 0.5,
      }}>
      <Button variant='outlined' onClick={() => setCurrentLang(prev => prev === "Swe" ? "Eng" : "Swe")} sx={{
        width: "4%",
      }}>
        {currentLang == "Swe" ? "Swe" : "Eng"}
      </Button>
      <Box sx={{width: "80%"}}>
        <LinearProgress variant="determinate" value={progress} color='primary' sx={{borderRadius: "5px", background: currentMode == "Dark" ? "#222" : "#CCC" }}/>
      </Box>
      <Button variant='outlined' onClick={() => setCurrentMode(prev => prev === "Dark" ? "Light" : "Dark")} sx={{
        width: "4%",
      }}>
        {currentMode == "Dark" ? "Dark" : "Light"}
      </Button>
    </Box>

    <Box
      sx={{
        display: 'flex',
        height: '100%',
        width: `${components.length * 100}vw`,
        transition: 'transform 0.5s ease',
        transform: `translateX(-${activeIndex * 100}vw)`,
        
      }}
    >
      {components.map((child, idx) => {
        if (!child) {
          console.warn("Ops! Component was empty")
        }
        return (
          <Box
            key={idx}
            component="div"
            aria-hidden={activeIndex !== idx}
            sx={{
              width: '100vw',
              height: '100vh',
              flexShrink: 0,
              position: 'relative',
            }}
          >
            {child as any}
          </Box>
        );
      })}
    </Box>

      {/* Prev / Next buttons */}
      <IconButton
        onClick={showPrev}
        aria-label="Previous slide"
        sx={{
          position: 'absolute',
          top: '50%',
          left: theme.spacing(3),
          transform: 'translateY(-50%)',
          color: currentMode == "Dark" ? theme.palette.common.white : theme.palette.common.black,
          bgcolor: "transparent",
          '&:hover': { bgcolor: theme.palette.action.selected },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={showNext}
        aria-label="Next slide"
        sx={{
          position: 'absolute',
          top: '50%',
          right: theme.spacing(3),
          transform: 'translateY(-50%)',
          color: currentMode == "Dark" ? theme.palette.common.white : theme.palette.common.black,
          bgcolor: "transparent",
          '&:hover': { bgcolor: theme.palette.action.selected },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  )
}
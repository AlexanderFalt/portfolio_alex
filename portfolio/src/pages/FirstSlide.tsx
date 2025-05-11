import { 
    Box,
    Typography,
    Button
 } from "@mui/material";
import {
    useTheme,
} from '@mui/material/styles';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { swedishVersion } from "../constants/swedishVersion";
import { englishVersion } from "../constants/englishVersion";
import myPicture from '/unnamed 9.svg';


type Lang = "Swe" | "Eng"
interface LanguageProps {
  lang: Lang
}

export default function Introduction( { lang }: LanguageProps) {
    const theme = useTheme()
    const modeClass = theme.palette.mode === 'dark' ? 'dark-mode' : 'light-mode'
    const langObject = lang === "Eng"
    ? englishVersion
    : swedishVersion

    return(
        <Box sx={{
            bgcolor: "transparent",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Box sx={{
                width: "60vw",
                height: "80vh",
                position: "absolute",
                bottom: "0%",
            }}>
                <Typography variant="h2" sx={{fontFamily: "Roboto Mono", fontSize: "4rem"}}>Hello world! {langObject.intro.one}</Typography>
                <Typography variant="h1" sx={{fontFamily: "Montserrat", fontSize: "6rem", fontWeight: "700"}}>
                    <Box component="span" sx={{color: theme.palette.secondary.main}}>{"< "}</Box>
                        Alexander Fältskog 
                    <Box component="span" sx={{color: theme.palette.secondary.main}}>{" >"}</Box>
                </Typography>
                <Box component={'img'} src={myPicture} sx={{
                    height: "70%",
                    position: "absolute",
                    bottom: "0%",
                    left: "25%",
                    zIndex: 2
                }}/>
                <Box className={`aura-container ${modeClass}`}>
                    <div className="aura-blob" style={{ width: 300, height: 300, top: '70%', left: '70%' }} />
                    <div className="aura-blob" style={{ width: 250, height: 250, top: '60%', left: '30%' }} />
                    <div className="aura-blob" style={{ width: 200, height: 200, top: '20%', left: '50%' }} />
                </Box>
                <Typography variant="h2" sx={{fontFamily: "Roboto Mono", fontSize: "4rem", position: "absolute", left: "0%"}}>{langObject.intro.two}</Typography>
                <Typography variant="h2" sx={{fontFamily: "Roboto Mono", fontSize: "4rem", position: "absolute", left: "60%"}}>{langObject.intro.three}</Typography>
            </Box>
            <Box sx={{
                width: "15vw",
                height: "20vh",
                position: "absolute",
                bottom: "3%",
                right: "3%",
                display: "flex",
                alignItems: "space-evenly",
                justifyContent: "center",
                gap: "10px",
                flexDirection: "column",
            }}>
                <Button variant="contained" sx={{
                    borderRadius: 2,
                    color: "#fff",
                    background: theme.palette.secondary.main
                }}>
                    <Box component="span" sx={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", left: "-30%" }}>
                        <XIcon/>
                    </Box>
                    Twitter
                </Button>
                <Button variant="contained" sx={{
                    borderRadius: 2,
                    color: "#fff",
                    background: theme.palette.secondary.main
                }}>
                    <Box component="span" sx={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", left: "-30%" }}>
                        <LinkedInIcon/>
                    </Box>
                    LinkedIn
                </Button>
            </Box>
        </Box>
    )
}
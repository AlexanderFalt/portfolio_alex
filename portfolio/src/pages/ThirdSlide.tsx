import { 
    Box,
    Typography,
    Button
 } from "@mui/material";
import { swedishVersion } from "../constants/swedishVersion";
import { englishVersion } from "../constants/englishVersion";
import { useTheme } from "@mui/material/styles";
import EventFinders from '../assets/EventFinders.svg';

type Lang = "Swe" | "Eng"
interface LanguageProps {
  lang: Lang
}

export default function SecondWebsite({ lang } : LanguageProps) {
    const theme = useTheme()
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
            fontFamily: "Montserrat",
        }}>
            <Box sx={{ 
                width: "70vw", 
                height: "50vh", 
                borderRadius: "8px",
                display: "flex",
                flexDirection: "row"
            }}>
                <Box sx={{height: "100%", width: "40%", padding: "2%"}}>
                    <Typography sx={{opacity: 1, color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "600", fontSize: "clamp(2.5rem, 10vw, 4rem)"}} variant="h3">EventFinders</Typography>
                    <Typography sx={{opacity: 1, color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "400", fontSize: "clamp(1.2rem, 10vw, 1.5rem)", margin: "20px 5px"}} variant="body1">{langObject.secondWebsite.one}</Typography>
                    <Button variant={'contained'} sx={{
                        borderRadius: 2,
                        color: "#fff",
                        background: theme.palette.secondary.main,
                        marginTop: "10px",
                        width: "100%",
                        height: "4vh"
                    }}>
                        {langObject.secondWebsite.button}
                    </Button>                 
                </Box>
                <Box sx={{height: "100%", width: "60%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Box component={'img'} src={EventFinders} sx={{width: "92%", borderRadius: "8px", border: "1px solid black"}}/>
                </Box>
            </Box>
        </Box>
    )
}
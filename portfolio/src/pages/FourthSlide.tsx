import { 
    Box,
    Typography
} from "@mui/material";
import { swedishVersion } from "../constants/swedishVersion";
import { englishVersion } from "../constants/englishVersion";
import { useTheme } from "@mui/material/styles";
import DarkGit from '../assets/logos/dark/git_dark.svg';

type Lang = "Swe" | "Eng"
interface LanguageProps {
  lang: Lang
}



export default function Technologies({lang} : LanguageProps) {
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
            <Box sx={{width: "80vw", height: "60vh"}}>
                <Typography variant="h3" sx={{opacity: 1, marginBottom: "2%", color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "600", fontSize: "clamp(2.5rem, 10vw, 4rem)"}}>{langObject.technologies.one}</Typography>
                <Typography sx={{opacity: 1, color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "400", fontSize: "clamp(1.2rem, 10vw, 1.5rem)", margin: "20px 5px", whiteSpace: "pre-line", }} variant="body1">{langObject.technologies.two}</Typography>
                <Box sx={{border: "1px solid black", height: "30%", width: "100%"}}>
                    <Box component="img" src={DarkGit} sx={{}}/>
                </Box>
            </Box>
        </Box>
    )
}
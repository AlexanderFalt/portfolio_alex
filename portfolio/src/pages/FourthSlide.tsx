import { 
    Box,
    Typography
} from "@mui/material";
import { swedishVersion } from "../constants/swedishVersion";
import { englishVersion } from "../constants/englishVersion";
import { useTheme } from "@mui/material/styles";
import DarkGit from '../assets/logos/dark/git_dark.svg';
import LightGit from '../assets/logos/light/git_light.svg';
import DarkAngular from '../assets/logos/dark/angular_dark.svg';
import LightAngular from '../assets/logos/dark/angular_light.svg';
import DarkJava from '../assets/logos/dark/java_dark.svg';
import LightJava from '../assets/logos/light/java_light.svg';
import DarkJavascript from '../assets/logos/dark/javascript_dark.svg';
import LightJavascript from '../assets/logos/light/javascript_light.svg';
import DarkLinux from '../assets/logos/dark/linux_dark.svg';
import LightLinux from '../assets/logos/light/linux_light.svg';
import DarkMui from '../assets/logos/dark/materialUi_dark.svg';
import LightMui from '../assets/logos/light/materialUi_light.svg';
import DarkMongo from '../assets/logos/dark/mongo_dark.svg';
import LightMongo from '../assets/logos/light/mongo_light.svg';
import DarkNode from '../assets/logos/dark/node_dark.svg';
import LightNode from '../assets/logos/node_light.svg';
import DarkPython from '../assets/logos/dark/python_dark.svg';
import LightPython from '../assets/logos/light/python_light.svg';
import Dark

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
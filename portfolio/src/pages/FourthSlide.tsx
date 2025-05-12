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
import LightAngular from '../assets/logos/light/angular_light.svg';
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
import LightNode from '../assets/logos/light/node_light.svg';
import DarkPython from '../assets/logos/dark/python_dark.svg';
import LightPython from '../assets/logos/light/python_light.svg';
import DarkReact from '../assets/logos/dark/react_dark.svg';
import LightReact from '../assets/logos/light/react_light.svg';
import DarkSql from '../assets/logos/dark/sql_dark.svg';
import LightSql from '../assets/logos/light/sql_light.svg';
import DarkTailwind from '../assets/logos/dark/tailwind_dark.svg';
import LightTailwind from '../assets/logos/light/tailwind_light.svg';
import DarkTypescript from '../assets/logos/dark/typescript_dark.svg';
import LightTypescript from '../assets/logos/light/typescript_light.svg';
import useMediaQuery from '@mui/material/useMediaQuery';

type Lang = "Swe" | "Eng"
interface LanguageProps {
  lang: Lang
}

export default function Technologies({lang} : LanguageProps) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('md'));
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
            { isMobile ? (
                <Box sx={{width: "80vw", height: "60vh"}}>
                    <Typography variant="h3" sx={{opacity: 1, marginBottom: "2%", color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "600", fontSize: "clamp(1.5rem, 10vw, 4rem)"}}>{langObject.technologies.one}</Typography>
                    <Typography sx={{opacity: 1, color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "400", fontSize: "clamp(0.75rem, 10vw, 1.5rem)", margin: "20px 5px", whiteSpace: "pre-line", }} variant="body1">{langObject.technologies.two}</Typography>
                    <Box sx={{height: "30%", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                        {theme.palette.mode == "dark" ? (
                            <>
                                <Box component="img" src={LightGit} sx={{}}/>
                                <Box component="img" src={LightAngular} sx={{}}/>
                                <Box component="img" src={LightJava} sx={{}}/>
                                <Box component="img" src={LightJavascript} sx={{}}/>
                                <Box component="img" src={LightLinux} sx={{}}/>
                                <Box component="img" src={LightMui} sx={{}}/>
                                <Box component="img" src={LightMongo} sx={{}}/>
                                <Box component="img" src={LightNode} sx={{}}/>
                                <Box component="img" src={LightPython} sx={{}}/>
                                <Box component="img" src={LightReact} sx={{}}/>
                                <Box component="img" src={LightSql} sx={{}}/>
                                <Box component="img" src={LightTailwind} sx={{}}/>
                                <Box component="img" src={LightTypescript} sx={{}}/>
                            </>
                        ) : (
                            <>
                                <Box component="img" src={DarkGit} sx={{}}/>
                                <Box component="img" src={DarkAngular} sx={{}}/>
                                <Box component="img" src={DarkJava} sx={{}}/>
                                <Box component="img" src={DarkJavascript} sx={{}}/>
                                <Box component="img" src={DarkLinux} sx={{}}/>
                                <Box component="img" src={DarkMui} sx={{}}/>
                                <Box component="img" src={DarkMongo} sx={{}}/>
                                <Box component="img" src={DarkNode} sx={{}}/>
                                <Box component="img" src={DarkPython} sx={{}}/>
                                <Box component="img" src={DarkReact} sx={{}}/>
                                <Box component="img" src={DarkSql} sx={{}}/>
                                <Box component="img" src={DarkTailwind} sx={{}}/>
                                <Box component="img" src={DarkTypescript} sx={{}}/>
                            </>
                        )}
                    </Box>
                </Box>
            ) : (
                <Box sx={{width: "80vw", height: "85vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <Typography variant="h3" sx={{opacity: 1, marginBottom: "2%", color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "600", fontSize: "clamp(1.5rem, 10vw, 2rem)", width: "100%"}}>{langObject.technologies.one}</Typography>
                <Typography sx={{opacity: 1, color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "400", fontSize: "clamp(0.75rem, 10vw, 1rem)", margin: "20px 5px", whiteSpace: "pre-line", }} variant="body1">{langObject.technologies.two}</Typography>
                <Box sx={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                    {theme.palette.mode == "dark" ? (
                        <>
                            <Box component="img" src={LightGit} sx={{width: 20}}/>
                            <Box component="img" src={LightAngular} sx={{width: 20}}/>
                            <Box component="img" src={LightJava} sx={{width: 20}}/>
                            <Box component="img" src={LightJavascript} sx={{width: 20}}/>
                            <Box component="img" src={LightLinux} sx={{width: 20}}/>
                            <Box component="img" src={LightMui} sx={{width: 20}}/>
                            <Box component="img" src={LightMongo} sx={{width: 20}}/>
                            <Box component="img" src={LightNode} sx={{width: 20}}/>
                            <Box component="img" src={LightPython} sx={{width: 20}}/>
                            <Box component="img" src={LightReact} sx={{width: 20}}/>
                            <Box component="img" src={LightSql} sx={{width: 20}}/>
                            <Box component="img" src={LightTailwind} sx={{width: 20}}/>
                            <Box component="img" src={LightTypescript} sx={{width: 20}}/>
                        </>
                    ) : (
                        <>
                            <Box component="img" src={DarkGit} sx={{width: 20}}/>
                            <Box component="img" src={DarkAngular} sx={{width: 20}}/>
                            <Box component="img" src={DarkJava} sx={{width: 20}}/>
                            <Box component="img" src={DarkJavascript} sx={{width: 20}}/>
                            <Box component="img" src={DarkLinux} sx={{width: 20}}/>
                            <Box component="img" src={DarkMui} sx={{width: 20}}/>
                            <Box component="img" src={DarkMongo} sx={{width: 20}}/>
                            <Box component="img" src={DarkNode} sx={{width: 20}}/>
                            <Box component="img" src={DarkPython} sx={{width: 20}}/>
                            <Box component="img" src={DarkReact} sx={{width: 20}}/>
                            <Box component="img" src={DarkSql} sx={{width: 20}}/>
                            <Box component="img" src={DarkTailwind} sx={{width: 20}}/>
                            <Box component="img" src={DarkTypescript} sx={{width: 20}}/>
                        </>
                    )}
                </Box>
            </Box>
        )}
        </Box>
    )
}
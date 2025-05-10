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
import myPicture from '../assets/unnamed 9.png'

type Lang = "Swe" | "Eng"
interface LanguageProps {
  lang: Lang
}

export default function Introduction( { lang }: LanguageProps) {
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
import { 
    Box,
    Typography,
    Button
} from "@mui/material";
import { swedishVersion } from "../constants/swedishVersion";
import { englishVersion } from "../constants/englishVersion";
import { useTheme } from "@mui/material/styles";

type Lang = "Swe" | "Eng"
interface LanguageProps {
  lang: Lang
}

export default function Conclusion({lang} : LanguageProps) {
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
            flexDirection: "row"
        }}>
            <Box sx={{width: "40vw", height: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <Typography variant="h3" sx={{opacity: 1, marginBottom: "2%", color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "600", fontSize: "clamp(2.5rem, 10vw, 4rem)", width: "100%"}}>{langObject.conclustion.one}</Typography>
                <Typography sx={{opacity: 1, color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "400", fontSize: "clamp(1.2rem, 10vw, 1.5rem)", margin: "20px 5px", width: "100%" }} variant="body1">{langObject.conclustion.two}</Typography>
                <Typography sx={{opacity: 1, color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "400", fontSize: "clamp(1.2rem, 10vw, 1.5rem)", margin: "20px 5px", width: "100%" }} variant="body1">{langObject.conclustion.three}</Typography>
                <Button variant="contained" sx={{
                    borderRadius: 2,
                    color: "#fff",
                    background: theme.palette.secondary.main,
                    marginTop: "10px",
                    width: "100%",
                    height: "4vh"
                }}>
                    {langObject.conclustion.button}
                </Button>
            </Box>
            <Box sx={{width: "40vw", height: "60vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Typography variant="h3" sx={{opacity: 1, marginBottom: "2%", color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "600", fontSize: "clamp(4.5rem, 10vw, 6rem)", whiteSpace: "pre-line", textAlign: "center" }}>{langObject.conclustion.four}</Typography>
            </Box>
        </Box>
    )
}
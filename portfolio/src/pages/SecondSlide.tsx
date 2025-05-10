import { 
    Box,
    Typography
 } from "@mui/material";
import { swedishVersion } from "../constants/swedishVersion";
import { englishVersion } from "../constants/englishVersion";

type Lang = "Swe" | "Eng"
interface LanguageProps {
  lang: Lang
}

export default function FirstWebsite({lang} : LanguageProps) {
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
            <Typography variant="h1">{langObject.intro.one}</Typography>
        </Box>
    )
}
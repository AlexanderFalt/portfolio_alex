import { 
    Box,
    Typography,
    Button,
 } from "@mui/material";
import { swedishVersion } from "../constants/swedishVersion";
import { englishVersion } from "../constants/englishVersion";
import { useTheme } from "@mui/material/styles";
import Coworkify from '../assets/Coworkify.svg';
import useMediaQuery from '@mui/material/useMediaQuery';

type Lang = "Swe" | "Eng"
interface LanguageProps {
  lang: Lang
}

export default function FirstWebsite({lang} : LanguageProps) {
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
            {isMobile ? (
                <Box sx={{ 
                    width: "70vw", 
                    height: "50vh", 
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <Box sx={{height: "100%", width: "40%", padding: "2%"}}>
                        <Typography sx={{opacity: 1, color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "600", fontSize: "clamp(2.5rem, 10vw, 4rem)"}} variant="h3">Coworkify</Typography>
                        <Typography sx={{opacity: 1, color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "400", fontSize: "clamp(1.2rem, 10vw, 1.5rem)", margin: "20px 5px"}} variant="body1">{langObject.firstWebsite.one}</Typography>                    
                        <Button variant={'contained'} component="a" href="https://coworkifytwo.vercel.app/" target="_blank" rel="noreferrer" sx={{
                            borderRadius: 2,
                            color: "#fff",
                            background: theme.palette.secondary.main,
                            marginTop: "10px",
                            width: "100%",
                            height: { xs: '36px', sm: '42px' }
                        }}>
                            {langObject.firstWebsite.button}
                        </Button>
                    </Box>
                    <Box sx={{height: "100%", width: "60%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Box component={'img'} src={Coworkify} sx={{width: "92%", borderRadius: "8px", border: "1px solid black"}}/>
                    </Box>
                </Box>
            ) : (
                <Box sx={{ 
                    width: "75vw", 
                    height: "90vh", 
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems:"center",
                    justifyContent: "center"
                }}>
                    <Box sx={{ width: "100%", padding: "2%"}}>
                        <Typography sx={{opacity: 1, color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "600", fontSize: "clamp(1.5rem, 10vw, 2rem)"}} variant="h3">Coworkify</Typography>
                        <Typography sx={{opacity: 1, color: theme.palette.mode == "dark" ? "#fff" : "#000", fontWeight: "400", fontSize: "clamp(0.8rem, 10vw, 1rem)", margin: "20px 5px"}} variant="body1">{langObject.firstWebsite.one}</Typography>                    
                        <Button variant={'contained'} component="a" href="https://coworkifytwo.vercel.app/" target="_blank" rel="noreferrer" sx={{
                            borderRadius: 2,
                            color: "#fff",
                            background: theme.palette.secondary.main,
                            marginTop: "10px",
                            width: "100%",
                            height: { xs: '36px', sm: '42px' }
                        }}>
                            {langObject.firstWebsite.button}
                        </Button>
                    </Box>
                    <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Box component={'img'} src={Coworkify} sx={{width: "92%", borderRadius: "8px", border: "1px solid black"}}/>
                    </Box>
                </Box>
            )}
        </Box>
    )
}
import { 
    Box,
    Typography,
    Button,
    Link
} from "@mui/material";
import {
    useTheme,
} from '@mui/material/styles';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { swedishVersion } from "../constants/swedishVersion";
import { englishVersion } from "../constants/englishVersion";
import myPicture from '/unnamed 9.svg';
import useMediaQuery from '@mui/material/useMediaQuery';

type Lang = "Swe" | "Eng"
interface LanguageProps {
  lang: Lang
}

export default function Introduction( { lang }: LanguageProps) {
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
        }}>
            {isMobile ? (
                <>
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
                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <Box component={'img'} src={myPicture} sx={{
                                height: "70%",
                                position: "absolute",
                                bottom: "0%",
                                zIndex: 2,
                            }}/>
                            <Box
                            sx={{
                                width: "78%",
                                height: "78%",
                                position: "absolute",
                                bottom: "-6%",
                                zIndex: 0,
                                backgroundColor: '#0C8593',
                                maskImage: 'url(/unnamed%209.svg)',
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskImage: 'url(/unnamed%209.svg)',
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                            }}
                            />
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
                        <Button variant="contained" component={Link} href="https://x.com/AlexanderF59905" target="_blank" referrerPolicy="no-referrer" sx={{
                            borderRadius: 2,
                            color: "#fff",
                            background: theme.palette.secondary.main
                        }}>
                            <Box component="span" sx={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", left: "-30%" }}>
                                <XIcon/>
                            </Box>
                            Twitter
                        </Button>
                        <Button variant="contained" component={Link} href="https://www.linkedin.com/in/alexander-f%C3%A4ltskog-971208277/" target="_blank" referrerPolicy="no-referrer" sx={{
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
                </> 
            ) : (
                <>
                    <Box sx={{
                        width: "75vw",
                        height: "70vh",
                        position: "absolute",
                        bottom: "0%",
                        }}>
                        <Typography variant="h2" sx={{fontFamily: "Roboto Mono", fontSize: "1.8rem"}}>Hello world! {langObject.intro.one}</Typography>
                        <Typography variant="h1" sx={{fontFamily: "Montserrat", fontSize: "2rem", fontWeight: "600"}}>
                            <Box component="span" sx={{color: theme.palette.secondary.main}}>{"< "}</Box>
                                Alexander Fältskog 
                            <Box component="span" sx={{color: theme.palette.secondary.main}}>{" >"}</Box>
                        </Typography>
                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <Box component={'img'} src={myPicture} sx={{
                                height: "50%",
                                position: "absolute",
                                bottom: "0%",
                                zIndex: 2,
                            }}/>
                            <Box
                            sx={{
                                width: "88%",
                                height: "60%",
                                position: "absolute",
                                bottom: "-6%",
                                zIndex: 0,
                                backgroundColor: '#0C8593',
                                maskImage: 'url(/unnamed%209.svg)',
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskImage: 'url(/unnamed%209.svg)',
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                            }}
                            />
                        </Box>
                        <Typography variant="h2" sx={{fontFamily: "Roboto Mono", fontSize: "1.8rem", position: "absolute", left: "0%"}}>{langObject.intro.two} {langObject.intro.three}</Typography>
                    </Box>
                    <Box sx={{
                        width: "10vw",
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
                        <Button variant="contained" component={Link} href="https://x.com/AlexanderF59905" target="_blank" referrerPolicy="no-referrer" sx={{
                            borderRadius: 2,
                            color: "#fff",
                            background: theme.palette.secondary.main
                        }}>
                            <Box component="span" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <XIcon/>
                            </Box>
                        </Button>
                        <Button variant="contained" component={Link} href="https://www.linkedin.com/in/alexander-f%C3%A4ltskog-971208277/" target="_blank" referrerPolicy="no-referrer" sx={{
                            borderRadius: 2,
                            color: "#fff",
                            background: theme.palette.secondary.main
                        }}>
                            <Box component="span" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <LinkedInIcon/>
                            </Box>
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    )
}
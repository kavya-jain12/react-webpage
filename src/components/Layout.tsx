import { Box } from "@mui/material"

import { Content } from "./Content"
import header from '../images/header/Godfather-header.jpg'

export const Layout = () => {
    return (
        <Box>
            <Box
                component='div'
                minHeight={'35vh'}
                sx={{
                    backgroundSize: 'cover',
                    backgroundImage: `linear-gradient(to top, rgba(32,33,36, 80%), rgba(0,0,0,0)), url(${header})`,
                    backgroundPosition: 'center center'
                }}
            />
            <Box
                component='div'
                minHeight={{ sm: '100vh', lg: '65vh' }}
                sx={{
                    backgroundColor: '#2e2e36',
                }}
            >
                <Content />
            </Box>
        </Box>
    )
}

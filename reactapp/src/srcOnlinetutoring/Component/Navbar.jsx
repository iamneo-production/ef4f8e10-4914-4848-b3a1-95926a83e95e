import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TempDrawer from './Drawer';
import BasicMenu from './ProfileMenu';
const theme = createTheme({
    palette: {
        primary: {
            main: '#64B6AC',
        },
        secondary: {
            main: '#B09E99',
        },
    },
});

export default function Navbar() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static">
                    <Toolbar>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        > */}
                            <TempDrawer/>
                            {/* <MenuIcon /> */}
                        {/* </IconButton> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'} }}
                        >
                            EduCo
                        </Typography>
                        <BasicMenu/>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}

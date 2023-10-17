import { IconButton, Toolbar, Typography } from "@mui/material";
import StyledTopBar from "./StyledTopBar";
import MenuIcon from '@mui/icons-material/Menu';

interface AppTopBarProps{
    open?: boolean;
    drawerWidth: number;
    handleDrawerOpen:()=>void;
}

const AppTopBar = (props: AppTopBarProps)=>{
    const {open, drawerWidth, handleDrawerOpen} = props;

    return(
    <StyledTopBar drawerWidth={drawerWidth} position="fixed" open={open}>
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
          Simi Looziny Maps
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </StyledTopBar>
)}

export default AppTopBar
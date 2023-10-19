import { useTheme } from '@mui/material/styles';
import {Drawer as MUIDrawer}  from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "ol/ol.css";
import DrawerHeader from './DrawerHeader';


type DrawerProps = {
  open: boolean,
  drawerWidth: number,
  handleDrawerClose:()=>void
}


function Drawer(props: DrawerProps) {
  const theme = useTheme();
  const {open, drawerWidth, handleDrawerClose} = props;

  return (
    <MUIDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
    </MUIDrawer>
  );
}

export default Drawer;
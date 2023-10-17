import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "ol/ol.css";
import DrawerHeader from './DrawerHeader';


type RightDrawerProps = {
  open: boolean,
  drawerWidth: number,
  handleDrawerClose:()=>void
}


function RightDrawer(props: RightDrawerProps) {
  const theme = useTheme();
  const {open, drawerWidth, handleDrawerClose} = props;

  return (
    <Drawer
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
    </Drawer>
  );
}

export default RightDrawer;
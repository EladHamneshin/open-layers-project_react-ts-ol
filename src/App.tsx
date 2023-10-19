import './App.css'
import Drawer from './components/Drawer/Drawer'
import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import TopBar from './components/TopBar/TopBar';
import OLMapMain from './components/OLMap/OLMapMain';
import { Feature } from 'ol';
import { Point } from 'ol/geom';


function App() {
  const drawerWidth = 500;
  const [open, setOpen] = useState(false);
  const [markers, setMarkers] = useState<Feature<Point>[]>([]);

  return (
      <Box sx={{ display: 'flex', height:"93%"}}>
        <CssBaseline />
        <TopBar 
          drawerWidth={drawerWidth}
          open={open} 
          handleDrawerOpen={()=>setOpen(true)}/>
        <OLMapMain 
          drawerWidth={drawerWidth} 
          open={open}/>
        <Drawer 
          open={open} 
          drawerWidth={drawerWidth} 
          handleDrawerClose={()=>setOpen(false)}/>
      </Box>
  )
}

export default App;

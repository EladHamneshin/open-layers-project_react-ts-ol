import './App.css'
import RightDrawer from './components/RightDrawer'
import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import OLMapContainer from './components/OLMapContainer';
import OLMap from './components/OLMap';
import DrawerHeader from './components/DrawerHeader';
import AppTopBar from './components/AppTopBar';


function App() {
  const drawerWidth = 500;
  const [open, setOpen] = useState(false);

  return (
      <Box sx={{ display: 'flex', height:"93%"}}>
        <CssBaseline />
        <AppTopBar drawerWidth={drawerWidth} open={open} handleDrawerOpen={()=>setOpen(true)}/>
        <OLMapContainer drawerWidth={drawerWidth} open={open}>
          <DrawerHeader />
          <OLMap/>
        </OLMapContainer>
        <RightDrawer open={open} drawerWidth={drawerWidth} handleDrawerClose={()=>setOpen(false)}/>
      </Box>
  )
}

export default App;

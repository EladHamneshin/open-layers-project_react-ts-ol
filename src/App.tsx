import './App.css'
import RightDrawer from './components/Drawer/RightDrawer'
import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import AppTopBar from './components/TopBar/AppTopBar';
import OLMapMain from './components/OLMap/OLMapMain';


function App() {
  const drawerWidth = 500;
  const [open, setOpen] = useState(false);

  return (
      <Box sx={{ display: 'flex', height:"93%"}}>
        <CssBaseline />
        <AppTopBar drawerWidth={drawerWidth} open={open} handleDrawerOpen={()=>setOpen(true)}/>
        <OLMapMain drawerWidth={drawerWidth} open={open}/>
        <RightDrawer open={open} drawerWidth={drawerWidth} handleDrawerClose={()=>setOpen(false)}/>
      </Box>
  )
}

export default App;

import { styled } from "@mui/material";

interface StyledMainProps{
  open?: boolean;
  drawerWidth: number;
}

const StyledMain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })
<StyledMainProps>(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(0),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
  position: 'relative',
}));

export default StyledMain;
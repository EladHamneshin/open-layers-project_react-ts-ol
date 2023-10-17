import DrawerHeader from "../Drawer/DrawerHeader";
import OLMap from "./OLMap";
import StyledMain from "./StyledMain";

interface OLMapMainProps{
    open: boolean;
    drawerWidth: number;
}

const OLMapMain = (props: OLMapMainProps)=>{
    const {open, drawerWidth} = props;

    return (
        <StyledMain drawerWidth={drawerWidth} open={open}>
        <DrawerHeader />
        <OLMap/>
      </StyledMain>
    )
}

export default OLMapMain;
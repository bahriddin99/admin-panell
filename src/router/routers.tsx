

import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import EventNoteIcon from '@mui/icons-material/EventNote';
interface  Route {
    path: string;
    content:string;
    icon:React.ReactElement
}

const routers:Route[] = [
  
    {
        path :"/main",
        content: "Workers",
        icon: <EventNoteIcon/>
    },
    {
        path :"/main/product",
        content: "Products",
        icon: <PersonOutlineIcon/>
    },
    {
        path :"/main/category",
        content: "Categories",
        icon: <DryCleaningIcon/>
    }
   
   

]

export default routers
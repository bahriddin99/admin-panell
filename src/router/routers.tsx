
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CategoryIcon from '@mui/icons-material/Category';
import EventNoteIcon from '@mui/icons-material/EventNote';

interface  Route {
    path: string;
    content:string;
    icon:React.ReactElement
}

const routers:Route[] = [
    {
        path :"/main/product",
        content: "Products",
        icon: <PersonOutlineIcon/>
    },

    {
        path :"/main/category",
        content: "Categories",
        icon: <CategoryIcon/>
    },
    {
        path :"/main",
        content: "Workers",
        icon: <EventNoteIcon/>
    }
  
   
   
   

]

export default routers
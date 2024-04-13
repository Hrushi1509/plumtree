import { FiFacebook } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { AiOutlineStar,AiTwotoneStar } from "react-icons/ai";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import Person2Icon from '@mui/icons-material/Person2';

export const icons = {
    facebook : <FiFacebook />,
    twitter : <SlSocialTwitter color="white"/>,
    google: <AiOutlineGooglePlus />,
    search: <CiSearch />,
    stars: <AiTwotoneStar />,
    star: <AiOutlineStar />,
    cart: <ShoppingCartOutlinedIcon style={{}}/>,
    like: <FavoriteTwoToneIcon style={{color:'grey'}}/>,
    left: <KeyboardArrowLeftOutlinedIcon/>,
    right: <KeyboardArrowRightOutlinedIcon/>,
    call: <CallIcon/>,
    mail: <MailIcon/>,
    profile: <Person2Icon/>
}
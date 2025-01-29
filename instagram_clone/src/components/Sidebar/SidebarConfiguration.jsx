import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineSearch,
  AiFillCompass,
  AiOutlineMessage,
  AiFillPlusCircle,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePlusCircle,
  AiOutlineCompass,
  
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
export const mainMenu = [
  {
    title: "Home",
    icon: <AiOutlineHome className="text-2xl mr-5" />,
    isActiveIcon: <AiFillHome className="text-2xl mr-5"></AiFillHome>,
  },
  {
    title: "Search",
    icon: <AiOutlineSearch className="text-2xl mr-5" />,
    isActiveIcon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>,
  },
  {
    title: "Explore",
    icon: <AiOutlineCompass className="text-2xl mr-5" />,
    isActiveIcon: <AiFillCompass className="text-2xl mr-5"></AiFillCompass>,
  },
  {
    title: "Message",
    icon: <AiOutlineMessage className="text-2xl mr-5" />,
    isActiveIcon: <AiFillPlusCircle className="text-2xl mr-5"></AiFillPlusCircle>,
  },
  {
    title: "Notification",
    icon: <AiOutlineHeart className="text-2xl mr-5" />,
    isActiveIcon: <AiFillHeart className="text-2xl mr-5"></AiFillHeart>,
  },
  {
    title: "Create",
    icon: <AiOutlinePlusCircle  className="text-2xl mr-5"  />,
    isActiveIcon: <AiFillPlusCircle className="text-2xl mr-5"></AiFillPlusCircle>,
  },
  {
    title: "Profile",
    icon: <CgProfile className="text-2xl mr-5" />,
    isActiveIcon: <CgProfile className="text-2xl mr-5"></CgProfile>,
  },
];

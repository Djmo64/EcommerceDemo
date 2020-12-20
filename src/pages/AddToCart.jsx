
import React , { useReducer } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "./NotFound";
import {
  CumulioComponent,
  CumulioContext,
  initialState,
  reducer
} from "react-cumulio";
import {
  Header,
  Footer,
  CategoryItem,
  CatyItem,
  DropdownMenu,
  DropdownMenu2,
  NavItem,
  LandingPage, DropdownCat
} from "./LandingPage";
import ReactStars from "react-rating-stars-component";
import TVItems from "../TVItems.json"

import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  UserAcc from "../Pictures/LandingPage/useracc.png"
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox} from "../components/SearchBox";
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import { CardComponent3 } from "../components/CardComponent";
import ContactForm from "../components/ContactForm";
import CountryFilter from "../components/CountryFilter";
import {BrandFilter} from "../components/BrandFilter";
import TimeFilter from "../components/TimeFilter";
import RadioAd from "../RadioAd.json";
import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { StationFilters } from "../components/OtherFilters";
import {useState} from "react"
import ChatBot from "../components/ChatBot";
import { ReactComponent as ComputerIcon } from "../icons/computer.svg";
import { ReactComponent as Location2Icon } from "../icons/location2.svg";
import { ReactComponent as MarketingIcon } from "../icons/digital-marketing.svg";
import { ReactComponent as Marketing2Icon } from "../icons/digital-marketing2.svg";
import AutoCompleteText from "../components/AutoCompleteText";
import 'react-tabs/style/react-tabs.css';
import SearchData from "../industries.json";
import Item from "antd/lib/list/Item";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";




export function AttachDetails(){
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value,setValue] = useState(0);
  const [tab,setTab] = useState(0);
function navoptions(){
  const navys = ["Manage Orders", "Team Operations", "Analytics", "Campaign Location Map", "Optimization", "Delivered Orders"]
  const list = navys.map((nav, index)=> {
    return(
    <div onClick={()=> setValue(index)} style={value ===index ? {background: 'linear-gradient(144deg, rgba(188,193,201,1) 35%, rgba(139,143,149,1) 100%)', color: 'black', borderBottom: '1px solid white', borderTop: '1px solid white'}: null} id= {index} className='sideoption-navy'>
      <p className='p-sideoption' ><b>{nav}</b></p>
      {value ===index ? <span className='arrowright'></span> : null}
    </div>
    )
  })
  return(
  <div className='navtabdash'>{list}</div>
  )
}

return(
  <div>
    <div className='navytopbar'>
      <div className='section1dashbar'>
        <div className='logodash'>
            <img className="logod" src={require("../Pictures/LandingPage/CompanyLogo.png")}  alt="company"/>
        </div>
        <div className='hellouser'>
          <img className="logoU" src={UserAcc}  alt="User"/>
          <p><b>Hi, User</b></p>
        </div>
    </div>
      <div className='section2dashbar'>
        <h1>Performance Dashboard</h1>
      </div>
      <div className='section3dashbar'>
        <p className='quotes'>"What gets measured, gets managed."</p>
        <div className='backtomain'>
          <p>◄</p>
          <p className='backtomainp'>Back to Main Page</p>
        </div>
      </div>
    </div>
    <div className='navySidebar'>
      
    {navoptions()}
{/* {value === 0 ?
 
 :null} */}
  {value === 0 ? 
  
<div className='orderDetailstop-container'>
<div className='orderDetailstop'>
   <h2>Order Details</h2>
    <div className='detailTabs'>
      <div onClick={()=>setTab(0)} className='tabNoti'>
        <p>Active</p>
        <span className='amount'>3</span>
        {tab === 0 ?<span className='arrowup'></span> :null}
      </div>
      <p>|</p>
      <div onClick={()=>setTab(1)} className='tabNoti'>
        <p>Missing Details</p>
        <span className='amount'>2</span>
        {tab === 1 ?<span className='arrowup'></span>: null}
      </div>
      <p>|</p>
      <div onClick={()=>setTab(2)} className='tabNoti'>
        <p>Completed</p>
        <span className='amount'>5</span>
        {tab === 2 ?<span className='arrowup'></span>: null}
      </div>
      <p>|</p>
      <div onClick={()=>setTab(3)} className='tabNoti'>
        <p>All</p>
        <span className='amount'>10</span>
        {tab === 3 ?<span className='arrowup'></span>:null}
      </div>
    </div>
 </div>
 {tab === 0 ?
<CumulioContext.Provider value={{ state, dispatch }}>
<CumulioComponent dashboardId="035c0304-0bfe-4b7c-8c10-a4acb8eb9d76" language="en" />
</CumulioContext.Provider> 
: null}
{tab === 1?
<div className='missingDetails'>
  <div className='missingDetailTop'>
    <h2>Orders With Missing Details</h2>
    <div className='missingparams'>
      <p>Order Date:</p>
      <p>|</p>
      <p>Due On:</p>
      <p>|</p>
      <p>Total:</p>
      <p>|</p>
      <p>Status:</p>
    </div>
  </div>
</div>
:null}
</div>
  : null}
</div>
<Footer/>
</div>
)






  
//     const [cart, setCart] = useContext(CartContext);
//     const [notHidden,sethidden] = useState(true)
//     const totalPrice = cart.reduce((acc, curr) => acc + curr.Price, 0 );
//     const [activeName,setActiveName] = useState('');
//     const [activeType,setActiveType] = useState('TVAD');
//     const [colorstyle,setColor] = useState('none')
//     const toHide = () => {
//       sethidden(false)
//     }
//     const Unhidden = () => {
//       sethidden(true)
//     }
//     const RemoveFromCart = (index) =>{
//       var newCart = cart;
//       newCart.splice(index,1);
//       setCart([...newCart])
//       console.log(newCart)
//       console.log(cart)
//   }
//   const cartlist = cart.map((car) =>{
//     function active(title, type){
//       setActiveName(title)
//       setActiveType(type)
//       return(
//       title === activeName ? setColor("gray"): null)
      
//     }
//     return(
//         <div>
//         <div className='itemdes3' style = {activeName === car.Title ?{background: colorstyle} : {background: "none"}}  onClick={()=> active(car.Title, car.Sec)}>
          
//             <img src={require("../Pictures/"+car.Sec+"/" + car.Image + ".png")}/>
//             <h2 style = {activeName === car.Title ?{color: "black"} : {color: "black"}}>{car.Title}</h2>
//         </div>
//         <div className='itemdes2'>
            
           
            
//         </div>
        
//         </div>
//     )
// })

//     return(
//         <div>
//              <Header  className="header-tag">
//         <div  className="dropdown-searchbar">
//           <div className="ACB">
//            <DropdownCat/>
//           </div>
//           <SearchBox className="searchbar" />
//           <div className="searchSvg">
//           <Search />
//           </div>
//         </div>
//         <NavItem icon={PinIcon} />
//         <NavItem icon={WorldIcon} />
//         <NavItem  icon= { CartIcon}>
//          {/* {cart.length > 0 ? <DropdownMenu2/>: null} */}
//         </NavItem> 
//         <NavItem icon = {User}>
//           <DropdownMenu />
//         </NavItem>
//       </Header>
//       <nav className="navtabs">
//         <ul className="navtabs-routes">
//           <Link to= "/TodaysDeals"> Today's Deals</Link> 
//           <p>|</p>
//           <Link to= "/AboutUs">About Us</Link>
//           <p>|</p>
//           <PageLink
//     activeClass="active"
//     to="HowItWorks"
//     spy={true}
//     smooth={true} 
//     offset={0}
//     duration={100}>How It Works</PageLink>
//     <p>|</p>
//           <PageLink
//     activeClass="active"
//     to="SellAdvertising"
//     spy={true}
//     smooth={true}
//     offset={0}
//     duration={100}
// >Sell Advertising</PageLink>
// <p>|</p>
//           <Link to= "AllCategories/Digital">Digital</Link>
//           <p>|</p>
//           <Link to= "/ContactUs">Contact Us</Link>
//           <p>|</p>
//           <Link to="/Career">Careers</Link>
//           <p>|</p>
//           <Link to="/Help">Help</Link>

//           </ul>
//       </nav>
//         <div className="chatAndCart">
//             <div className='chatcartlist'>
//                 <h1>Items({cartlist.length})</h1>
//             {cartlist}
//             </div>
//             {activeType === "TVAD"?
//             <div className ='orderdetails'>
// <div classname= 'orderdetails1'>
// <p>Please Attach your xxsecond TV commercial:</p>
//   <button>Attach Video</button>
//   </div>
//   <div classname= 'orderdetails1'>
//   <p>If you would like a high quality video commercial, visit Tasweiq Instant Production and select from our affordable options:</p>
//  <Link to='/AllCategories/Production'> <button>Tv Ad Production</button></Link>
//  </div>

// </div>: null }
// {activeType === "Hardware"? 
// <div className ='orderdetails'>

// <p>Please explain the tone of the video and list any special instructions.</p>
// <textarea></textarea>
// <div>
//   <button>Attach Video</button>
//   <Link to='/AllCategories/Production'><button>Choose Video option</button></Link>
// </div>
// <p>If you ordered any gig extras: please provide details. (Background/text to be added/logo/script writing/custom attire) (optional)</p>
// <textarea></textarea>
// <p>Please list any pronunciation of Business names, names, special words, acronyms, locations and such. If you can send an audio recording of the pronunciation that would be best! Thank you! </p>
// <textarea></textarea> 
// </div>: null }
// {activeType === "RadioAd"?<div className ='orderdetails'>

// <div classname= 'orderdetails1'>
// <p>Please Attach your xxsecond Radio spot here:</p>
//   <button>Attach Audio</button>
//   </div>
//   <div classname= 'orderdetails1'>
//   <p>If you would like a high quality voice over, visit Tasweiq Instant Production and get one delivered for as little as 200AED:</p>
//  <Link to='/AllCategories/Production'> <button>Get Voice over now</button></Link>
//  </div>
// </div>: null }
// {activeType === "csw"? <div className ='orderdetails'>

// <p>Please explain the tone of the text and list any special instructions.</p>
// <textarea></textarea>
// <p>If you ordered any gig extras: please provide details. (Background/text to be added/logo/script writing/custom attire) (optional)</p>
// <textarea></textarea>
// <p>Please list any pronunciation of Business names, names, special words, acronyms, locations and such. If you can send an audio recording of the pronunciation that would be best! Thank you! </p>
// <textarea></textarea> 
// </div>:

// null}
// {activeType === "Print"? <div className ='orderdetails'>

// <div classname= 'orderdetails1'>
// <p>Please Attach your artwork here:</p>
//   <button>Attach File</button>
//   </div>
//   <div classname= 'orderdetails1'>
//   <p>If you would like a high quality Ad placement artwork, visit Tasweiq Instant Production and get one delivered for as little as 200AED:</p>
//  <Link to='/AllCategories/Production'> <button>Get Design Now</button></Link>
//  </div>
// </div>: null }
// {activeType === "VA"? <div className ='orderdetails'>
// <div classname= 'orderdetails1'>
// <p>Please Attach your xxsecond spokesperson video:</p>
//   <button>Attach Video</button>
//   </div>
//   <div classname= 'orderdetails1'>
//   <p>If you would like a high quality spokesperson video and/or script, visit Tasweiq Instant Production and select from our affordable options:</p>
//  <Link to='/AllCategories/Production'> <button>Spokesperson video Production</button></Link>
//  <Link to='/AllCategories/Production'> <button>Script Production</button></Link>
//  </div>

// </div>: null }
// {activeType === "Cinema"? <div className ='orderdetails'>

// <div classname= 'orderdetails1'>
// <p>Please Attach your xxsecond Cinema commercial:</p>
//   <button>Attach Video</button>
//   </div>
//   <div classname= 'orderdetails1'>
//   <p>If you would like a high quality video commercial, visit Tasweiq Instant Production and select from our affordable options:</p>
//  <Link to='/AllCategories/Production'> <button>Cinema Ad Production</button></Link>
//  </div>
// </div>: null }
// {activeType === "OutofHome"? <div className ='orderdetails'>

// <div classname= 'orderdetails1'>
// <p>Please Attach your print here:</p>
//   <button>Attach File</button>
//   </div>
//   <div classname= 'orderdetails1'>
//   <p>If you would like a high quality Ad placement print, visit Tasweiq Instant Production and get one delivered for as little as 200AED:</p>
//  <Link to='/AllCategories/Production'> <button>Get Design Now</button></Link>
//  </div>
//  <small>*All attachments should be within the placement specifications</small>
// </div>: null }
// {activeType === "LogoCol"? <div className ='orderdetails'>

// <div classname= 'orderdetails1'>
// <p>Please Attach sample logos to help the designers with your design:</p>
//   <button>Attach File</button>
//   </div>
//   <div classname= 'orderdetails1'>
//   <p>Please explain the nature of your business and the energy you want with your logo to transmit:</p>
//  </div>
//  <textarea></textarea> 
 
// </div>: null }
// {activeType === "VO"? <div className ='orderdetails'>

// <p>Please explain the tone of your voice over and list any special instructions.</p>
// <textarea></textarea>
// <button>Attach Doc File</button>
// <p>If you ordered any gig extras: please provide details. (Background/text to be added/logo/script writing/custom attire) (optional)</p>
// <textarea></textarea>
// <p>Please record all pronunciation of Business names, names, special words, acronyms, locations and such. If you can send an audio recording of the pronunciation that would be best! Thank you! </p>
// <div className='recordhere'>
//   <button>Record Here</button>
//   <button>Attach Audio</button>
// </div>
// <div className='recordhere'>
//   <input type='radio'></input>
//   <p>The information I provided is accurate and complete. Any changes will require the sellers approval and may be subject to additional cost.</p>
// </div>
// <button className='recordsubbtn'>Submit</button>
// <div classname= 'orderdetails1'>
//   <p>If you would like a high quality Script to be developed for as little as 2.00AED per word, visit Tasweiq Instant Production:</p>
//  <Link to='/AllCategories/Production'> <button>Get Script Written Now</button></Link>
//  </div>
// </div>:

// null}

//             <ChatBot/>
//             </div>
//             <Footer />
//         </div>
//     )
}
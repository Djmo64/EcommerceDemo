import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "../pages/NotFound";
import {
  Header,
  Footer,
  CategoryItem,
  CatyItem,
  DropdownMenu,
  NavItem,
  LandingPage, DropdownCat
} from "../pages/LandingPage";
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox} from "../components/SearchBox";

import image1 from "../Pictures/AboutUs/Attachment1.jpg";
import {BreadCrumbComp, TopCrumb} from "../components/BreadCrumbComp"
import VisionAndMission from "../pages/VisionAndMission";
import Attachment3 from "../Pictures/AboutUs/Attachment3.jpg";
import consultant2 from "../Pictures/AboutUs/consultant2.png";
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import WhatWeDo from "../pages/WhatWeDo";
import CEOMessage from "../pages/CEOMessage";
import OurConsultants from "../pages/OurConsultants"
import AboutUs from "../pages/AboutUs"
import email1 from "../Pictures/AboutUs/email1.png";
import phone from "../Pictures/AboutUs/phone1.png";
import form from "../Pictures/AboutUs/form.png";

const sidebar = [
  "Vision and Mission",
  "Core Values",
  "What We Do",
  "CEO Message",
  "Our Consultants",
];
const side = () =>{
  return(
  <ul>
    <Link to = "/AboutUs/VisionAndMission"><small>Vision and Mission</small></Link>
    <Link to = "/AboutUs/CoreValues"><small>Core Values</small></Link>
    <Link to = "/AboutUs/WhatWeDo"><small>What We Do</small></Link>
    <Link to = "/AboutUs/CEOMessage"><small>CEO Message</small></Link>
    <Link to = "/AboutUs/OurConsultants"><small>Our Consultants</small></Link>
  </ul>
  )
}


function CoreValues() {
    return (
      <div>
        <Header className="header-tag">
          <div className="dropdown-searchbar">
            <div className="ACB">
              <DropdownCat/>
            </div>
            <SearchBox className="searchbar" />
            <Search className="searchSvg" width="10%" height="46%" />
          </div>
          <NavItem icon={PinIcon} />
        <NavItem icon={WorldIcon} />
        <NavItem  icon= { CartIcon}/>
        <NavItem icon = {User}>
          <DropdownMenu />
        </NavItem>
        </Header>
        <nav className="navtabs">
        <ul className="navtabs-routes">
          <Link to= "/TodaysDeals"> Today's Deals</Link> 
          <p>|</p>
          <Link to= "/AboutUs">About Us</Link>
          <p>|</p>
          <a  href="/LandingPage/#HowItWorks">How It Works</a>
          <p>|</p>
          <a  href="/LandingPage/#SellAdvertising">Sell Advertising</a>
          <p>|</p>
          <Link to= "/ContactUs">Contact Us</Link>
          <p>|</p>
          <Link to="/Career">Careers</Link>
          <p>|</p>
          <Link to="/Help">Help</Link>
          </ul>
      </nav>
        <div className ="TopCrumb">
        <div className="TopCrumb-content">
  <small><Link to="/LandingPage">Home</Link> </small>
  <small> {'>'} </small>
  <small><Link to="/AboutUs">About</Link> </small>
  <small> {'>'} </small>
  <small><b>Core Values</b> </small> 
  </div>
      </div>
        <div className="AboutT-section">
          <div className="AboutSidebar">
            <h2><b>About Us</b></h2>
            <ul className="sideList">
          <Link to = "/AboutUs"><small>About Tasweiq</small></Link>
    <Link to = "/AboutUs/VisionAndMission"><small>Vision and Mission</small></Link>
    <Link to = "/AboutUs/CoreValues"><b><small>Core Values</small></b></Link>
    <Link to = "/AboutUs/WhatWeDo"><small>What We Do</small></Link>
    <Link to = "/AboutUs/CEOMessage"><small>CEO Message</small></Link>
    <Link to = "/AboutUs/OurConsultants"><small>Our Consultants</small></Link>
  </ul>
            <div className="AboutUsContact">
            <div className="AboutUsContact-card">
                <h1>
                Contact Us
                </h1>
                <h2 className="cc-text">
                <img className="cc-img" src={phone}></img>800 - TASWEIQ (827 9347)
                </h2>
                <h2 className="cc-text">
  <img className="cc-img" src={email1}></img>contact@tasweiq.com
                </h2>
                <h2 className="cc-text">
                <img className="cc-img" src={form}></img>Contact Form
                  </h2>
              </div>
            </div>
          </div>
          <div className="separator"/>
          <div className="AboutContent">
            <h1>Core Values</h1>
            <img className="pplAbout" src={Attachment3}/>
            <p className="vhp">
            Our core values are truly embedded in our culture at Tasweiq and we pride ourselves on continuously
upholding these values when we interact with our shareholders, partners, clients and employees.
            </p>
            <p className="vhp">
            These values are integral to the way we do business and communicate with our stakeholders:
            </p>
            <img className="pplAbout" src={consultant2}/>
          </div>
          
        </div>
        <Footer />
      </div>
    );
  }
  const tabs = [
    "New!", "Production", "Hardware", "Analytics", "Sell", "Media", "Help"
  ];
  const tabItems = tabs.map((tab) => (
    <Link to={"/"+tab.replace(/ /g,'')} className="tabIcons"onClick={() => console.log("/"+tab.replace(/ /g,''))} >
      {tab}
    </Link>
  ));
  function Header2(props) {
    return (
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <div className="logoAndText">
              <div className="logoName">
                <img
                  className="logo"
                  src={require("../Pictures/LandingPage/CompanyLogo.png")}
                  alt="company"
                />
               <Link to="/LandingPage"><h1>Tasweiq</h1></Link>
              </div>
            </div>
            {props.children}
          </ul>
        </nav>
        <nav className="navtabs">
          <ul className="navtabs-routes">{tabItems}</ul>
        </nav>
      </div>
    );
  }

  export default CoreValues;
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
import email1 from "../Pictures/AboutUs/email1.png";
import phone from "../Pictures/AboutUs/phone1.png";
import form from "../Pictures/AboutUs/form.png";
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox} from "../components/SearchBox";
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import image1 from "../Pictures/AboutUs/Attachment1.jpg";
import BreadCrumbComp from "../components/BreadCrumbComp"
import VisionAndMission from "../pages/VisionAndMission";
import CoreValues from "../pages/CoreValues";
import WhatWeDo from "../pages/WhatWeDo";
import CEOMessage from "../pages/CEOMessage";
import OurConsultants from "../pages/OurConsultants";


const sidebar = [
  "Vision and Mission",
  "Core Values",
  "What We Do",
  "CEO Message",
  "Our Consultants",
];




const AboutUs = () => {
  return (
      <Switch>
        <Route exact path="/AboutUs" component={AboutTasweiq} />
        <Route exact path="/LandingPage" component={LandingPage}/>
        <Route exact path="/AboutUs/VisionAndMission" component={VisionAndMission}/>
        <Route exact path="/AboutUs/CoreValues" component={CoreValues} />
        <Route exact path="/AboutUs/WhatWeDo" component={WhatWeDo} />
        <Route exact path="/AboutUs/CEOMessage" component={CEOMessage} />
        <Route exact path="/AboutUs/OurConsultants" component={OurConsultants} />
        <Route exact path="/NotFound" component={NotFoundPage} />
        <Redirect to="/LandingPage" />
      </Switch>
 
  );
};

function AboutTasweiq() {
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
  <small><b>About Tasweiq</b> </small>
  </div>
      </div>
      <div className="AboutT-section">
        <div className="AboutSidebar">
          <h2><b>About Us</b></h2>
          <ul className="sideList">
          <Link to = "/AboutUs"><b><small>About Tasweiq</small></b></Link>
    <Link to = "/AboutUs/VisionAndMission"><small>Vision and Mission</small></Link>
    <Link to = "/AboutUs/CoreValues"><small>Core Values</small></Link>
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
          <h1>About Tasweiq</h1>
          <img className="pplAbout" src={image1}/>
          <p className="vhp">
            Tasweiq is an eCommerce disruptor and a marketplace for all things
            marketing related. The company offers the purchase of
            traditional/digital advertising, hardware requirements and in-depth
            analytics all from the touch of your phone using automated AI and
            GIS systems. The predictive intelligence allows for people who are
            not marketing savvy to advertise their product and/or service
            efficiently as the backend of the platform uses algorithms based on
            big data to source strategic touch points. The four main areas of
            acquired data are: Online Advertising Data, Traditional Advertising
            Data, Production Data, and Hardware Inventory.{" "}
          </p>
          <p className="vhp">
            Therefore, Tasweiq is a robust Tech company with a website/app that
            helps to connect merchants across the globe in over 100 countries
            (advertising spots owners e.g. billboards, magazines) with companies
            in the MENA region instantaneously. It will provide users with real
            time analytics to make viable and responsible decisions when dealing
            with their sizable budgets and the ability to procure hardware for
            quality production.”
          </p>
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





export default AboutUs;

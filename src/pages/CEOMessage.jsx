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
import BreadCrumbComp from "../components/BreadCrumbComp"
import VisionAndMission from "../pages/VisionAndMission";
import CoreValues from "../pages/CoreValues";
import WhatWeDo from "../pages/WhatWeDo";
import email1 from "../Pictures/AboutUs/email1.png";
import phone from "../Pictures/AboutUs/phone1.png";
import form from "../Pictures/AboutUs/form.png";
import Attachment5 from "../Pictures/AboutUs/Attachment5.jpg";
import Khalid from "../Pictures/AboutUs/Khalid.jpg";
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import OurConsultants from "../pages/OurConsultants"
import AboutUs from "../pages/AboutUs"

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

function CEOMessage() {
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
  <small><b>CEO Message</b> </small>
  </div>
      </div>
        <div className="AboutT-section">
          <div className="AboutSidebar">
            <h2><b>About Us</b></h2>
            <ul className="sideList">
          <Link to = "/AboutUs"><small>About Tasweiq</small></Link>
    <Link to = "/AboutUs/VisionAndMission"><small>Vision and Mission</small></Link>
    <Link to = "/AboutUs/CoreValues"><small>Core Values</small></Link>
    <Link to = "/AboutUs/WhatWeDo"><small>What We Do</small></Link>
    <Link to = "/AboutUs/CEOMessage"><b><small>CEO Message</small></b></Link>
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
            <h1>CEO Message</h1>
            
            <img className="pplAbout" src={Attachment5}/>
            <div className="paraContainer">
              <div>
            <p className="vhp"> 
            “We believe that staying abreast of modern technologies is at
the forefront of achieving verifiable year-upon-year success and
growth objectives. It is our collective drive and determination to
bring innovation to marketing practices that will inspire our
customers to execute campaigns in a timely and effective
manner. With state of the art marketing infrastructure, we aim
to disrupt the advertising industry by deploying end to end B2B
solutions and effectively steer our product towards the direction
of our target audience and to establish the ultimate goal: brand
preference.

            </p>
            <p className="vhp">
            At the heart of our brand is our commitment in providing every
employee with personal as well as professional development and
empower organizational excellence that motivate exceptional
results. Our dedication will elevate the industry standard as we
strive to become the global benchmark. Together we will build a
culture of trust, passion and integrity whilst delivering powerful
capabilities across verticals.”
            </p>
            <p className='vhp2'><b>
              — Khalid Mohamed Al Nakeeb</b>
            </p>
            </div>
            <img className="pplAbout2" src={Khalid}/>
            </div>
            
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

  export default CEOMessage;
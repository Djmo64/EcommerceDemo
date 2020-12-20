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
import Attachment9 from "../Pictures/Career/Attachment9.jpg";




const CurrentJobOpenings = () =>{
    return(
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
  <small><Link to="/Career">Career</Link> </small>
  <small> {'>'} </small>
  <small><b>Current Job Openings</b> </small>
  </div>
      </div>
      <div className="AboutT-section">
        <div className="AboutSidebar">
          <h2><b>Career</b></h2>
          <ul className="sideList">
          <Link to = "/Career"><small>Overview</small></Link>
    <Link to = "/Career/WhyWorkWithUs"><small>Why Work With Us</small></Link>
    <Link to = "/Career/CurrentJobOpenings"><b><small>Current Job Openings</small></b></Link>
    
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
          <h1>Current Job Openings</h1>
          <img className="pplAbout" src={Attachment9}/>
          <p className="vhp">
          If you feel that you fit the role of any of the below job opportunities, please email us your resume to
recruitment@tasweiq.com
          </p>
          <p className="vhp">
          Please include the reference number in the subject of your email.
          </p>
          <div className="Career-info2">
              <div className ="Career-info2-div">
                <h3>Location</h3>
                <input placeholder="search"/>
              </div>
              <div className ="Career-info2-div">
              <h3>Department</h3>
                <input placeholder="search"/>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  
    )
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

export default CurrentJobOpenings;
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
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import {CardComponent} from '../components/CardComponent';
import ContactForm from '../components/ContactForm';


function AllCategories(){
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
     
      <div className="AboutT-section">
        <div className="AboutSidebar2">
          <h2><b>All Categories</b></h2>
          <ul className="sideList">
    <Link to = "/AllCategories/TVAdvertising"><small>TV</small></Link>
    <Link to = "/AllCategories/Cinema"><small>Cinema</small></Link>
    <Link to = "/AllCategories/Radio"><small>Radio</small></Link>
    <Link to = "/AllCategories/Print"><small>Print</small></Link>
    <Link to = "/AllCategories/OutOfHome"><small>Out of Home</small></Link>
    <Link to = "/AllCategories/Digital"><small>Digital</small></Link>
    <Link to = "/AllCategories/Production"><small>Tasweiq Instant Production</small></Link>
  </ul>
        </div>
        
        <div className="separator"/>
        <div className="cardContainer2">
        <CardComponent/>
        </div>
        </div>
        <div className="section7-1">
          <div className="section7-container">
            <div className="section7-becomepartner">
              <div className="overlay">
                <div className="overlay-text">
                  <h1>Become a Partner</h1>
                  <p>
                    Want to be part of our amazing merchants on our platform?
                    Simply just fill the details on the right and we will get
                    back to you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
            <div className="section7-contactform">
              <ContactForm />
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

export default AllCategories;
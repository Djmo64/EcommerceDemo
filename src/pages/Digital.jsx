import React, { useState } from "react";
import {BrowserRouter as Router,Route,Switch,Link,Redirect,} from "react-router-dom";
import { Header,Footer,DropdownMenu,NavItem,DropdownCat, DropdownMenu2 } from "../pages/LandingPage";
import ReactStars from "react-rating-stars-component";
import TVItems from "../TVItems.json"
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox} from "../components/SearchBox";
import { CardComponent2 } from "../components/CardComponent";
import CountryFilter from "../components/CountryFilter";
import {BrandFilter} from "../components/BrandFilter";
import TimeFilter from "../components/TimeFilter";
import Dropdown from 'react-bootstrap/Dropdown'
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { LangFilter } from "../components/OtherFilters";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
      };
    
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

 

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }

function Digital() {
    const [cart, setCart] = useContext(CartContext);
    const [notHidden,sethidden] = useState(true)
    const totalPrice = cart.reduce((acc, curr) => acc + curr.Price, 0 );
    const [value, setValue] = useState(0);
    const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
    const toHide = () => {
      sethidden(false)
    }
    const Unhidden = () => {
      sethidden(true)
    }
    const RemoveFromCart = (index) =>{
      var newCart = cart;
      newCart.splice(index,1);
      setCart([...newCart])
      console.log(newCart)
      console.log(cart)
  }
    
  
    const cartprev = cart.map((crtp,index) => {
      return <div className="itemPadding">
        <img src={require("../Pictures/"+ crtp.Sec+ "/" + crtp.Image + ".png")}/>
        <small>{crtp.Title}</small>
        <span onClick={()=> RemoveFromCart(index)}>x</span>
      </div>
    })
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
          <NavItem  icon= { CartIcon}>
          {cart.length > 0 ? <DropdownMenu2/>: null}
          </NavItem>
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
          <div className="TopCrumb-content2">
          <Link to = "/AllCategories"><small>All Categories</small></Link>
          <Link to = "/AllCategories/TVAdvertising"><small>TV</small></Link>
      <Link to = "/AllCategories/Cinema"><small>Cinema</small></Link>
      <Link to = "/AllCategories/Radio"><small>Radio</small></Link>
      <Link to = "/AllCategories/Print"><small>Print</small></Link>
      <Link to = "/AllCategories/OutOfHome"><small>Out of Home</small></Link>
      <Link to = "/AllCategories/Digital"><b><small>Digital</small></b></Link>
      <Link to = "/AllCategories/Production"><small>Tasweiq Instant Production</small></Link>
      <Link to = "/AllCategories/Hardware"><small>Hardware</small></Link>
      </div>
    </div>
    
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs className="productionTabs" 
        variant="fullWidth"
        scrollButtons="auto"
        indicatorColor='#f44336'
        value={value} onChange={handleChange}  aria-label="simple tabs example">
          <Tab label="Social Media Management" {...a11yProps(0)} />
          <Tab label={"SEO/SEM Management"} {...a11yProps(1)} />
          <Tab label={"  Email Marketing"} {...a11yProps(2)} />
          <Tab label="Mobile Marketing" {...a11yProps(3)} />
          <Tab label=" Instagram Advertising" {...a11yProps(4)} />
          <Tab label=" Facebook Advertising" {...a11yProps(5)} />
          <Tab label={"YouTube Advertising"} {...a11yProps(6)} />
          <Tab label={"LinkedIn Advertising"} {...a11yProps(7)} />
          <Tab label="Twitter Advertising" {...a11yProps(8)} />
          <Tab label={"Music Platforms"} {...a11yProps(9)} />
          
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           {/* //card comp for voices */}
          
          </div>
          {/* {cartprev.length != 0 && notHidden == true ? 
          <div className='cartPrevContainer'>
            <div className='hidetab'>
              <button className='hidebtn' onClick={toHide}>Hide</button>
            </div>
            <h3 className="cartprevItems">Items({cartprev.length})</h3>
          <div className="cartPreview">
            
            {cartprev}
          </div>
          <p>subtotal: {Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( totalPrice)}</p>
            <button className="gotocartbtn"><Link to= "/Cart">Go to cart</Link></button>
          </div> : null}
          {cartprev.length !=0 && notHidden == false ? 
          <button className='showPrev' onClick={Unhidden}>{'◄'}</button> : null 
        } */}
        </div>
      </TabPanel>
      <TabPanel className='tabpanel' value={value} index={1}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           {/* //card comp for voices */}
          
          </div>
         
          
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           {/* //card comp for voices */}
          
          </div>
          
         
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           {/* //card comp for voices */}
          
          </div>
          
          
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           {/* //card comp for voices */}
          
          </div>
          
          
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           {/* //card comp for voices */}
          
          </div>
         
        
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           {/* //card comp for voices */}
          
          </div>
          
         
        </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           {/* //card comp for voices */}
          
          </div>
          
         
        </div>
      </TabPanel>
      <TabPanel value={value} index={8}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           {/* //card comp for voices */}
          
          </div>
          
        
        </div>
      </TabPanel>
      <TabPanel value={value} index={9}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           {/* //card comp for voices */}
          
          </div>
          
          
        </div>
      </TabPanel>
    </div>
       
        
        <Footer />
      </div>
    );
  }
  const tabs = [
    "New!",
    "Production",
    "Hardware",
    "Analytics",
    "Sell",
    "Media",
    "Help",
  ];
  const tabItems = tabs.map((tab) => (
    <Link
      to={"/" + tab.replace(/ /g, "")}
      className="tabIcons"
      onClick={() => console.log("/" + tab.replace(/ /g, ""))}
    >
      {tab}
    </Link>
  ));

  export default Digital;
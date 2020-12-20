import React, { useContext, useState } from "react";

import Modal from "react-modal";
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import ReactPlayer from 'react-player'
import ContactForm from "../components/ContactForm";
import card1 from "../Pictures/LandingPage/todaysdeals.jpg";
import card2 from "../Pictures/LandingPage/shopbycategories2.jpg";
import card3 from "../Pictures/LandingPage/hardware2.jpg";
import card4 from "../Pictures/LandingPage/hardware3.jpg";
import card5 from "../Pictures/LandingPage/Digital.jpg";
import card6 from "../Pictures/LandingPage/Shopbyloc.jpg";
import banner1 from "../Pictures/LandingPage/1_2.png";
import banner2 from "../Pictures/LandingPage/2_2.png";
import banner3 from "../Pictures/LandingPage/3_2.png";
import banner4 from "../Pictures/LandingPage/4_2.png";
import quotes from "../Pictures/LandingPage/quotes2.png";
import contactBanner from "../Pictures/LandingPage/ContactUs.png";
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as DownArdiv } from "../icons/down-arrow.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox, ModalSearchBox} from "../components/SearchBox";
import icon1 from "../Pictures/LandingPage/USA.png";
import icon2 from "../Pictures/LandingPage/usd.png";
import icon3 from "../Pictures/LandingPage/lang.png";
import logo1 from "../Pictures/LandingPage/logobar1.jpg";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ReactStars from "react-rating-stars-component";

import Carousel from 'react-elastic-carousel';
import "react-multi-carousel/lib/styles.css";




import { ReactComponent as ComputerIcon } from "../icons/computer.svg";
import { ReactComponent as Location2Icon } from "../icons/location2.svg";
import { ReactComponent as MarketingIcon } from "../icons/digital-marketing.svg";
import { ReactComponent as Marketing2Icon } from "../icons/digital-marketing2.svg";
import AutoCompleteText from "../components/AutoCompleteText";
import {Link} from "react-router-dom"
import 'react-tabs/style/react-tabs.css';
import SearchData from "../industries.json";
import Item from "antd/lib/list/Item";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { CartContext, OpenContext } from "../components/CartContext";




const LandingPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cart, setCart] = useContext(CartContext);
  
  const customStyles = {
    content : {
      top                   : '5%',
      left                  : '20%',
      right                 : '20%',
      bottom                : '10%',
      padding               : '0',
      height                :'fit-content',
      overflow              : 'visible'
    }
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  function getUnique(arr, comp) {
   
    const unique = arr
      .map((e) => e[comp])

      
      .map((e, i, final) => final.indexOf(e) === i && i)

     
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

const val = 0;

  const uniqueIndustryData = getUnique(SearchData, "Industry");
  const IndustryType = uniqueIndustryData.map((SearchResult, index) => {
    return <li key={index}> {SearchResult.Industry}</li>;
  })
  const indytype = SearchData.map((item,index) => {
  return item.CompanyAccount
  })

   
  return (
    
    <div id="header">
    
      <Header  className="header-tag">
        <div  className="dropdown-searchbar">
          <div className="ACB">
           <DropdownCat/>
          </div>
          <SearchBox className="searchbar" />
          <div className="searchSvg">
          <Search />
          </div>
        </div>
        <NavItem icon={PinIcon} />
        <NavItem icon={WorldIcon} />
        <NavItem   icon= { CartIcon}>
         {cart.length !== 0 ? <DropdownMenu2/>: null}
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
          <PageLink
    activeClass="active"
    to="HowItWorks"
    spy={true}
    smooth={true} 
    offset={0}
    duration={100}>How It Works</PageLink>
    <p>|</p>
          <PageLink
    activeClass="active"
    to="SellAdvertising"
    spy={true}
    smooth={true}
    offset={0}
    duration={100}
>Sell Advertising</PageLink>
          <p>|</p>
          <Link to= "/ContactUs">Contact Us</Link>
          <p>|</p>
          <Link to="/Career">Careers</Link>
          <p>|</p>
          <Link to="/Help">Help</Link>

          </ul>
      </nav>
      <div className="section1-div">
        <div className="section1">
         
          
          
                      <button className="Popup-btn" onClick={() => setModalIsOpen(true)}>Click Here to Start a Campaign</button>
                      
                       
        </div> 
        <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setModalIsOpen(false)}>
          <ModalSearchBox/>
          <div className="footer-select"><Link to="/TodaysDeals">Click here to browse all products →</Link></div>
      
      </Modal>
        
        <div className="section3">
          <div>
          
          <div className="section3-container">
            <div className="seeMoreCards">
              <Link className="tvclick" to="/AllCategories/TVAdvertising"></Link>
              <Link className="tvclick2" to="/AllCategories/Print"></Link>
              <Link className="tvclick3" to="/AllCategories/Radio"></Link>
              <Link className="tvclick4" to="/AllCategories/outOfHome"></Link>
            <img src={card2} alt="card1" />
            <button><Link to='/AllCategories'>See More</Link></button></div>
            <div className="seeMoreCards">
            <Link className="tvclick" to="/AllCategories/Production"></Link>
              <Link className="tvclick2" to="/AllCategories/Production"></Link>
              <Link className="tvclick3" to="/AllCategories/Production"></Link>
              <Link className="tvclick4" to="/AllCategories/Production"></Link>
            <img src={card3} alt="card2" />
            <button><Link to= "/AllCategories/Production">See More</Link></button></div>
            <div className="seeMoreCards">
            <img src={card4} alt="card3" />
            <button><Link to='/AllCategories/Hardware'>See More</Link></button></div>
          </div>
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Digital </h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              {/* <div className="top-pick-images2"> */}
               <Item><img src={require("../Pictures/LandingPage/top1-4.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top2-4.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top3-4.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top4-4.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top5-4.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top6-4.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top7-4.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top8-4.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              {/* </div> */}
              </Carousel>
              <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>

          </div>
          
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Abu Dhabi Products</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                  <div className='iconPic'>
                <img src={require("../Pictures/TVAD/tv8.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>National Geographic Abu Dhabi</p>
          
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,350<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/OutofHome/ofh2.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Hamdan Street</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,230<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/RadioAd/rad1.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Abu Dhabi Radio</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>5,250<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/Cinema/cin5.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Cine Royal Khalidiyah Mall</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/Print/prt15.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>The National</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,530<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/TVAD/tv2.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Abu Dhabi TV</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,230<sup>.00</sup></p></b>
                </div>
                </Item>

                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/Print/prt8.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>7 Days</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>9,870<sup>.00</sup></p></b>
                </div>
                </Item>
               <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/OutofHome/ofh1.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Electra Street Madinat Zayed</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>3,000<sup>.00</sup></p></b>
                </div>
                </Item>
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>

          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Most Popular Items</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                  <div className='iconPic'>
                <img src={require("../Pictures/TVAD/tv10.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> CNBC Arabiya</p>
          
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,350<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/RadioAd/rad18.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>  Virgin Radio</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,230<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/LandingPage/SMM.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Social Media Management</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>5,250<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/TVAD/tv28.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Fox Movies</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/VO/Thumbnail2.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>2D Explainer Video</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,530<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/OutofHome/ofh7.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Dubai Flower Center Bridge 2</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,230<sup>.00</sup></p></b>
                </div>
                </Item>

                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/Cinema/cin1.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Vox Mall of The Emirates</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>9,870<sup>.00</sup></p></b>
                </div>
                </Item>
               <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/TVAD/tv35.png").default}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> MBC 2</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,990<sup>.00</sup></p></b>
                </div>
                </Item>
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>

          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Promotional Items</h2>

              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/TS1.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Branded Round Neck Cotton</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/BC2.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Business Cards</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/Mask1.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Fabric Five Filter Face Mask</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/USB1.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Twister USB</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/NP3.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Soft Cover Notepad</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/Cap1.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Branded Baseball Cap</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/Speaker1.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Branded Metallic Speaker</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/CPB1.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Light up Power Bank</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
               
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>

          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Voice Overs</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/EnglishFemaleNA.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>English - American, Female</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>
              <Item>
                <div className="thumbnail-sec">
                  <div className='iconPic'>
                  <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/EnglishMaleNA.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>English - American, Male</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>
              
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/SpanishFemale.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Spanish - Latin American, Female</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/EnglishFemaleEU.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>English - British, Female</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/SpanishMale.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Spanish - Latin American, Male</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>

                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/newThumbnail.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Arabic - Classical, Male</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/EnglishMaleEU.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>English - British, Male</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>

                <Item>
                <div className="thumbnail-sec">
               
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/newThumbnail.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Arabic - Classical, Female</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>
          <div className="section3-container">
            <div className="seeMoreCards">
            <img src={card1} alt="card1" />
            <button><Link to= "/TodaysDeals">See More</Link></button></div>
            <div className="seeMoreCards">
            <img src={card6} alt="card2" />
            <button>See More</button></div>
            <div className="seeMoreCards">
            <img src={card5} alt="card3" />
            <button>See More</button></div>
          </div>

          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Cameras</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><img src={require("../Pictures/LandingPage/cam1.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/cam2.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/cam3.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/lens1.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/cam4.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/cam5.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/lens2.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/cam6.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
                </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>New Items</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Print/prt14.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Khaleej Times</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,650<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/Mask2.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Colour Five Filter Face Mask</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                

                
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/TVAD/tv6.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> BBC Arabic</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,230<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/RadioAd/rad5.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Quran Kareem Radio</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,230<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/AWD/ADIOS.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>App Development - iOS</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Print/prt2.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Gulf News</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/AWD/WD5P.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Website Content</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">

                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/Thumbnail.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Mobile Marketing</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,230<sup>.00</sup></p></b>
                </div>
                </Item>
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>

          {val > 0 ? <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Recommended</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><img/></Item>
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div> : null }
          {val > 0 ? <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Because You Bought: [value]</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              
               </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div> : null}
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>{'Video & Animation'}</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                  <div className='iconPic'>
                  <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/SP2.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Spokesperson Video (female)</p>
          
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,350<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/Thumbnail1.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>  Commercial #1</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,230<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/Thumbnail2.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> 2D Explainer Video</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>5,250<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/Thumbnail.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Logo Animation</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/SP1.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Spokesperson Video (male)</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,530<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/Thumbnail1.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Commercial #2</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,230<sup>.00</sup></p></b>
                </div>
                </Item>

               
               </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>
          { val > 0 ? <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Last Viewed</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><img/></Item>
               </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div> : null }
          {val > 0 ? <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Saved</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><img/></Item>
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div> : null}
          
    
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>TV</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top1-7.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top2-7.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top3-7.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top4-7.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top5-7.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top6-7.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top7-7.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top8-7.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              </Carousel>
                <div className="carousel-btn">
                <Link to='/AllCategories/TVAdvertising'><button className="seemorebtn-carousel">See More →</button></Link>
                </div>
            </div>
          </div>
          
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2> Dubai Products </h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><img src={require("../Pictures/LandingPage/top1-10.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/top2-10.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/top3-10.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/top4-10.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/top5-10.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/top6-10.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/top7-10.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/RadioAd/rad16.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Dubai 92FM</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,530<sup>.00</sup></p></b>
                </div>
                </Item>
                </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
          </div></div>
       
          
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2> Logo {'&'} Website Design</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/Collateral-full.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Collateral – Full</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoE.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Logo - Style E</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoM.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Logo - Style M</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoG.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Logo - Style G</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoC.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Logo - Style C</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoD.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Logo - Style D</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoP.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Logo - Style P</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoT.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Logo - Style T</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
          </div></div>
          
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2> Print </h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top1-9.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top2-9.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top3-9.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top4-9.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top5-9.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top6-9.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top7-9.jpg").default}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Print/prt5.png").default}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Al Waseet</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,330<sup>.00</sup></p></b>
                </div>
                </Item>
                </Carousel>
                <div className="carousel-btn">
                <Link to='/AllCategories/Print'><button className="seemorebtn-carousel">See More →</button></Link>
                </div>
          </div></div>
          
          
          
          </div>
          {/* <div className="section2">
          <div className="section2-container">
           
              <div className="section2-text-bottom">
              <h2>Create a Tailored Campaign</h2>
              </div>
               <div className="section2-btn-wrapper">
            <button className="Popup-btn" onClick={() => setModalIsOpen(true)}>Start Now!</button>
            
            </div>
          </div>
        </div> */}
        </div>
        {/* <div className="Hseperator"></div> */}
        <div className="section4">
          <h1 id= "HowItWorks">How It Works!</h1>
          <div className="section4-banners">
            <img src={banner1} alt="b1" />
            <img src={banner2} alt="b2" />
            <img src={banner3} alt="b3" />
            <img src={banner4} alt="b4" />
          </div>
          <div className="section4-buffer"></div>
        </div>
        <div className="section5">
          <div className="section5-vid-container">
          <ReactPlayer className="dexContainer" controls={true} url={"https://youtu.be/gMPxtlWYKZk"}/>
            
          </div>
          <div className="section5-container">
            <div className="section5-tabs">
              <NavItem2 icon={<Location2Icon />} />
              {/* <div className="hr1-div"> <hr className="hr1"/></div> */}
              <NavItem2 icon={<ComputerIcon />} />
              {/* <div className="hr1-div"> <hr className="hr1"/></div> */}
              <NavItem2 icon={<MarketingIcon />} />
              {/* <div className="hr1-div"> <hr className="hr1"/></div> */}
              <NavItem2 icon={<Marketing2Icon />} />
            </div>
            <div className="section5-text">
              <h1>29 Countries Worldwide</h1>
              <h1>Automated Service</h1>
              <h1>$312,784,134 In Advertising Spots</h1>
              <h1>Online Integration</h1>
            </div>
          </div>
        </div>
        {/* <div className="Hseperator"></div> */}
        <div  className="section6">
          <div id="SellAdvertising" className="section6-container" >
            <h1 >Become Our Partner</h1>
            <img src={quotes} alt="quotes" />
            <div className="gallery-container">
              <div className="inner-gallery-container">
              <img src={logo1} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section7">
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
        <div className="section8">
          <div className="section8-quotes">
            <div className="section8-btn">
              <button>Sign In</button>
            <PageLink
    activeClass="active"
    to="header"
    spy={true}
    smooth={true}
    offset={0}
    duration={100}><button>Back to Top</button></PageLink>
    
            </div>
          </div>
        </div>
        <div className="section9">
          <div className="section9-contact">
            <img src={contactBanner} alt="c1" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

function NavItem2(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="nav-item2">
      <button className="icon-button2" onClick={() => setModalIsOpen(true)}>
        {props.icon}
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <AutoCompleteText />
        <div>
          <button onClick={() => setModalIsOpen(false)}>close</button>
        </div>
      </Modal>
    </div>
  );
}
const categories = [
  "TV",
  "Cinema",
  "Radio",
  "Print",
  "Out Of Home",
  "Digital",
  "Production",
];
const catItems = categories.map((cat, index) => (
  <Link to={"/AllCategories/"+cat.replace(/ /g,'')} className="category-dd">
    {cat}
  </Link>
));

const tabs = [
  "Today's Deals",
  "About Us",
  "Hardware",
  "Sell Advertising",
  "Contact Us",
  "Career",
  "Help",
];
const tabItems = tabs.map((tab) => (
  <Link to={"/"+tab.replace(/ /g,'')} className="tabIcons"onClick={() => console.log("/"+tab.replace(/ /g,''))} >
    {tab}
  </Link>
));

function Header(props) {
  return (
    <div> 
      <nav className="navbar">
        <ul className="navbar-nav">
          <div className="logoAndText">
            <Link to="/LandingPage" className="logoName">
             <img
                className="logo"
                src={require("../Pictures/LandingPage/CompanyLogo.png").default}
                alt="company"
              />
              <h1>Tasweiq</h1>
            </Link>
          </div>
          {props.children}
        </ul>
      </nav>
      
    </div>
  );
}
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-options">
        <div className="footer-option-container1">
          <h1>Get To Know Us</h1>
          <h2>Careers</h2>
          <h2>Blog</h2>
          <h2>About Tasweiq</h2>
          <h2>Investor</h2>
          <h2>Our Philanthropy</h2>
          <h2>Consulting Services</h2>
          <h2>Auditing Services</h2>
          <h2>Our Partners</h2>
        </div>
        <div className="footer-option-container2">
          <h1>Make Money With Us</h1>

          <h2> Sell on Tasweiq</h2>
          <h2>Sell Your Production Services</h2>
          <h2>Become An Affilate</h2>
          <h2>Advertise Your Products</h2>
          <h2>Merchant Policy</h2>
          <h2>Manage Your Account</h2>
        </div>
        <div className="footer-option-container3">
          <h1>Let Us Help</h1>

          <h2>Your Account</h2>
          <h2>Your Order</h2>
          <h2>Uploading Difficulties</h2>
          <h2>Tasweiq Hotline</h2>
          <h2>FAQ’s</h2>
          <h2>Help</h2>
          <h2>Payments</h2>
          <h2>Policies</h2>
          <h2>Reload Your Balance</h2>
        </div>
      </div>
      <div className="footer-images">
        <img src={icon3} alt="I1" />
        <img src={icon2} alt="I1" />
        <img src={icon1} alt="I1" />
      </div>
      <div className="footer-border">
        <h3>Condition of Use </h3>
        <h3>©2020 by Tasweiq</h3>
        <h3>Privacy Notice</h3>
      </div>
    </div>
  );
}

function DropdownCat(){
  const [cat, setCat] = useState('');
  
  const handleChange = (event) => {
    setCat(event.target.value);}

  return(
    <div className='newcatdrop'>
     <FormControl >
      <Select className='newselselect' value={cat} displayEmpty  onChange={handleChange} inputProps={{ 'aria-label': 'Without label' }}>
      
        <MenuItem className='newitem' value={''}>All Categories</MenuItem>
        <MenuItem className='newitem' value={'TV'}> TV</MenuItem>
        <MenuItem className='newitem' value={'Cinema'}> Cinema</MenuItem>
        <MenuItem className='newitem' value={'Radio'}>Radio</MenuItem>
        <MenuItem className='newitem' value={'Print'}>Print</MenuItem>
        <MenuItem className='newitem' value={'OutOfHome'}>Out of Home</MenuItem>
        <MenuItem className='newitem' value={'Digital'}>Digital</MenuItem>
        <MenuItem className='newitem' value={'Production'}>Production</MenuItem>
      </Select>
      </FormControl>
    </div>
  )

}

// on change set state onChange= {()=> handleChange()}
function CategoryItem(props) {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('All Categories')
  return (
    <button className="cat-button" onClick={() => setShow(!show)} >  
      <p>{categories}</p>
        <span>
          <DownArdiv width="50%" height="50%" />
        </span>
      
      {show && props.children}
    </button>
  );
}
function CatyItem(props) {
  return (
    <div className="dropdown2">
      <ul className="cat-dd">
     <Link to= "/AllCategories/TVAdvertising" className="category-dd">TV</Link>
  <Link to="/AllCategories/Cinema" className="category-dd"> Cinema </Link>
  <Link to="/AllCategories/Radio" className="category-dd">Radio</Link>
  <Link to="/AllCategories/Print" className="category-dd">Pint</Link>
  <Link to="/AllCategories/OutOfHome" className="category-dd">Out of Home</Link>
  <Link to="/AllCategories/Digital" className="category-dd">Digital</Link>
  <Link to="/AllCategories/Production" className="category-dd">Production</Link>
      </ul>
    </div>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useContext(OpenContext);
  const [cart, setCart] = useContext(CartContext);
  let name =props.icon
  return (
    name === CartIcon ?
    <li className="nav-item" >
      <img src={props.icon} className={props.icon} onMouseOver={() => setOpen2(true)} href="#" className="icon-button" onClick={() => setOpen2(!open2).default}/>
  
      
  { cart.length > 0 ? <span className="itemcountIcon">{cart.length}</span> : null}
      

      {open,open2 && props.children}
      
     
    </li> :

    <li className="nav-item" onMouseLeave={() => setOpen(false)}>
    <img src={props.icon} className={props.icon}  href="#" className="icon-button" onMouseOver={() => setOpen(true)} onClick={() => setOpen(!open).default}/>

    
{ cart.length > 0 ? <span className="itemcountIcon">{cart.length}</span> : null}
    

    {open && props.children}
    
   
  </li>
  );
}

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-Left">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdownForIcon">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem leftIcon="" RightIcon="">
        Settings
      </DropdownItem>
      <DropdownItem leftIcon=" ">Logout</DropdownItem>
    </div>
  );
}

function DropdownMenu2(props){
  const [open2, setOpen2] = useContext(OpenContext);
  const [cart,setCart] = useContext(CartContext);
 const cartprev = cart.map((crtp,index) => {
  return <div className="itemPadding">
    <img src={require("../Pictures/"+ crtp.Sec+ "/" + crtp.Image + ".png").default}/>
    <small>{crtp.Title}</small>
    <span onClick={()=> RemoveFromCart(index)}>x</span>
  </div>
})
const RemoveFromCart = (index) =>{
  var newCart = cart;
  newCart.splice(index,1);
  setCart([...newCart])
  console.log(newCart)
  console.log(cart)
}
const totalPrice = cart.reduce((acc, curr) => acc + curr.Price, 0 );
  function DropdownItem(props){
  return (
    <a href="#" className="menu-item">
      <span className="icon-Left">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
}

  return (
   <div className="dropdownForIcon2" onMouseLeave={() => setOpen2(false)}>
      <h3 className="cartprevItems">Items({cartprev.length})</h3>
        <div className="cartPreview" >
          {cartprev}
          
        </div>
        <div className="totandcart">
        <button onClick={()=>setOpen2(false)} className="gotocartbtn">Continue Shopping</button>
        <p>subtotal: {Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( totalPrice)}</p>
          <button className="gotocartbtn"><Link to= "/Cart">Go to cart</Link></button>
        </div>
    </div> 
  );
  
}

export  {LandingPage, Header,Footer,CategoryItem,CatyItem,DropdownMenu,DropdownMenu2,DropdownCat, NavItem};

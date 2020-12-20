import React, { useState } from "react";
import { NavItem, DropdownCat, DropdownMenu,Header, Footer } from "./LandingPage";
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox, ModalSearchBox} from "../components/SearchBox";
import AutoCompleteText from "../components/AutoCompleteText";
import {Link} from "react-router-dom"
import 'react-tabs/style/react-tabs.css';
import SearchData from "../industries.json";
import Item from "antd/lib/list/Item";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { Dropdown } from "react-bootstrap";
import TVItems from '../TVItems.json'
import Carousel from 'react-elastic-carousel';
import "react-multi-carousel/lib/styles.css";



export default function MakePayment(){
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.Price, 0 );
    
    const cartlist = cart.map((car) =>{
            return(
                <div>
                <div className='itemdes'>
                    <img src={require("../Pictures/"+car.Sec+"/" + car.Image + ".png")}/>
                    <h2>{car.Title}</h2>
                </div>
                <div className='itemdes2'>
                    <div className='Icol1'>
                        <p>Broadcast Location</p>
                        <p>Advertising Type</p>
                        <p>Language</p>
                        <p>HD</p>
                        <p>Time Slot</p>
                        <p>Ad Length</p>
                    </div>
                    <div className='Icol2'>
                        
                        <p>U.A.E.</p>
                        <p>Television</p>
                        <p>English</p>
                        <p>Yes</p>
                        <p>21:00</p>
                        <p>30 Seconds</p>
                    </div>
                    
                </div>
                
                </div>
            )
        })
  
    return(
        <div>
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
<div className='payment-information'>
    <div className='left-sect'>
<div className='sign-in-label'>
    <h2><b>Please Sign In</b></h2>
<div className='payment-section-1'>
    
<div className='Sign-in-form'>
    <h3><b>Returning Customer</b></h3>
    <div className= 'sign-in-inputs'>
        <input type='text' placeholder='Tasweiq ID'/>
        <input type='password' placeholder='Password'/>
    </div>
    <div className='forgot-sign-in'>
        <small>Forgot Tesweiq ID or Password?</small>
        <button>Sign In</button>
    </div>
    </div>
    <div className='guest-option'>
        <h3><b>Guest Checkout</b></h3>
        <h3>Proceed to checkout, and you
can create a Tasweiq ID at the
end.</h3>
        <button>Continue as Guest</button>
    </div>
</div>
</div>
<div className='guest-checkout'>
<div className='guest-checkout-label'>
    <div className='label-guest'>
    <h2><b>Checkout as Guest</b></h2>
    <small>* = Require Information</small>
    </div>
    <div className='guest-checkout2'>
        <h3>*Contact</h3>
        <div className='input-1'>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Phone'/>
        </div>
    </div>
    <div className='guest-checkout2'>
        <h3>*Business Email</h3>
        <div className='input-1'>
            <input type='text' />
            <input type='text' />
        </div>
    </div>
    <div className= 'guest-adress'>
        <h3>*Company Address</h3>
        <select>
            <option>Country or Region</option>
        </select>
        <div className='input-1'>
            <input type='text' placeholder='Street Address' />
            <input type='text' placeholder='Street Address2' />
        </div>
        <div className='input-2'>
            <input type='text' placeholder='City' />
            <select>
                <option>State/Province</option>
            </select>
            <input type='text' placeholder='Zip Code' />
        </div>
        
    </div>
</div>
</div>
<div className='Attachment-sect'>
    <h2>Attachment</h2>
    <div className='Attachment-Label'>
        <div className='attach-btn'>
        <button>Choose File</button>
        <p className= 'empty-text'>No File Chosen</p>
        </div>
        <div className='or-link'>
            <p>or</p>
            <input type='text' placeholder='Link to download'/>
        </div>

    </div>
</div>

<div className='Attachment-sect'>
    <h2>Billing Information</h2>
    <div className='para-btn'>
    <p>Please select your form of payment from the available option(s) below.
Use your Tasweiq Reward Card or Tasweiq Gift Card</p><button>Add Card</button>
</div>
    <div className='credit-Label'>
        <div className='rad-btn'>
        <input name="Credit Card" type="radio" value="CreditCard" />
        <p>Credit Card</p>
        </div>
        <small>* = Require Information</small>
    </div>
    <div className='info-col'>
        <div className= 'col-spacing'>
        <div className='info-sect'>
            <p>*Credit Card #</p>
            <input type='text'/>
        </div>
        <div className= 'info-sect-alt'>
        <div className='info-sect2'>
            <p>*Expiration Date</p>
            <div className='ex-date'>
            <input type='text'/> <p>/</p> <input type='text'/>
            </div>
            </div>
        </div>
        <div className='info-sect'>
            <p>*Security ID</p>
            <input className='security-input'/>
        </div>
        <div className='info-sect'>
            <p>*Name On Card</p>
            <input type='text'/>
        </div>
        <div className='info-sect'>
            <p>*First Name</p>
            <input type='text'/>
        </div>
        <div className='info-sect'>
            <p>*Last Name</p>
            <input type='text'/>
        </div>
        <div className='info-sect'>
            <p>*Street Address</p>
            <input type='text'/>
        </div>
        <div className='info-sect'>
            <p>*Street Address 2</p>
            <input type='text'/>
        </div>
        <div className='info-sect'>
            <p>*City</p>
            <input type='text'/>
        </div>
        <div className='info-sect'>
            <p>*State/Province</p>
            <input type='text'/>
        </div>
        <div className='info-sect'>
            <p>*Zip Code</p>
            <input type='text'/>
        </div>
        <div className='info-sect'>
            <p>*Phone Number</p>
            <input type='text'/>
        </div>

        </div>
        <div className='paywithcheck-section'>
        <div className='paywithcheck'>
            <div className='paywithcheck-line'>
            <div className='paywitchcheck-sec'>
                <input type='radio' value='checkInfo'/>
                <p>Pay by Cheque</p>
            </div>
                <small>See Terms</small>
            </div>
            <small>Our customer service representative will be at your premise within 24 hours for collection.</small>
        </div>
        </div>
        <div className='wiretransfer-section'>
        <div className='wiretransfer'>
            <div className='wiretransfer-line'>
            <div className='wiretransfer-sec'>
                <input type='radio' value='wireInfo'/>
                <p>Wire Transfer</p>
            </div>
            </div>
            <div className='wireselects'>
                <div className='wireselect-1'>
                <p>To</p>
                <select>
                    <option></option>
                </select>
                </div>
                <div className='wireselect-2'>
                <p>Your Bank Country</p>
                <select>
                    <option>United Arab Emirates</option>
                </select>
                </div>
                <div className='wireselect-3'>
                <p>Amount</p>
                <input type='text' value='amount'/>
                <select>
                    <option>
                    AED
                    </option>
                </select>
                </div>
            </div>
        </div>
        </div>


        </div>
    </div>
</div>
<div className='right-sect'>
            <div className='purchase-cart'>
                <h2> Cart</h2>
                <div className='purhcase-cart-items'>
                    {cartlist}
                    <div className='section3-2-cart-div'>
    <div className='section3-2-cart-card'>
        <div className='totals'>
    <p>Item Total:</p> <p>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( totalPrice)}</p></div>
    <div className='totals'>
    <p><b>subtotal:</b></p> <p>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( totalPrice)}</p></div>
    </div>
    <div className='section4-2-cart-card'>
    <div className='totals'>
    <p>Shipping:</p> <p>0.00 AED</p></div>
    <div className='totals'>
    <p>Surcharges:</p> <p>0.00 AED</p></div>
    <div className='totals'>
    <p>Tax:</p> <p>0.00 AED</p></div>
    </div>
    <div className='section5-2-cart-card'>
    <div className='totals'>
    <p><b>Order total:</b></p><p>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( totalPrice)}</p>
    </div>
    </div> 
    </div>
    <button className='confirmAndPaybtn'><Link to='/Payment/Confirmation'> Confirm and Pay</Link></button>
                </div>
            </div>
    <div className='Promotional-code'>
        <h2><b>Promotional Code</b></h2>
        <h3><b>Enter Promotional Code and Save!</b></h3>
        <div className='apply-code'>
            <input type='text'/>
            <button>Apply</button>
        </div>
        <small>How do I get this?</small>
        <div className='toggle-code'>
            <input type='radio'/>
            <p>Send me exclusive coupons and special online
savings via Tasweiq email</p>
        </div>
    </div>
    <div>
        <div className='fine-print'>
        <small>Tasweiq has created a Billing FAQ where questions regarding payments,
payment methods, on-payment, and refunds are answered.</small>
        <small>While information on payments from customers is included within the
Tasweiq Terms of Service, the Billing FAQ really helps to clarify common
questions from customers, such as how to update credit card information,
how invoicing works, and how refunds work.</small>
</div>
    </div>
</div>
</div>
<Footer/>
        </div>
    )
}
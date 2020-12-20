import React, { useState, useContext, useReducer } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  CumulioContext,
  initialState,
  reducer
} from "react-cumulio";

import 'react-dates/lib/css/_datepicker.css'
import '@progress/kendo-theme-material/dist/all.css';
import 'react-dates/initialize'
// import 'bootstrap/dist/css/bootstrap.min.css'

//pages and header
import {LandingPage} from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import WhyWorkWithUs from "./pages/WhyWorkWithUs"
import CurrentJobOpenings from "./pages/CurrentJobOpenings"
import VisionAndMission from "./pages/VisionAndMission"
import CoreValues from "./pages/CoreValues"
import WhatWeDo from "./pages/WhatWeDo"
import CEOMessage from "./pages/CEOMessage"
import OurConsultants from "./pages/OurConsultants"
import Help from "./pages/Help";
import Feedback from "./pages/Feedback"
import FAQ from "./pages/FAQ"
import ContactUs from "./pages/ContactUs"
import MakePayment from "./pages/MakePayment"
import formDetails from "./pages/formDetails"
import PersonalInfo from './pages/personalInfo'

import NotFoundPage from "./pages/NotFound";
import LogAComplaint from "./pages/LogAComplaint";
import AllCategories from "./pages/AllCategories";
import TodaysDeals from "./pages/TodaysDeals";
import TVAdvertising from "./pages/TVAdvertising"
import RadioAds from "./pages/RadioAd";
import Cinema from "./pages/Cinema";
import OutOfHome from "./pages/OutOfHome";
import Prints from "./pages/Print";
import { Cart } from "./pages/Cart";
import {CartProvider, OpenProvider, ProductProvider} from './components/CartContext';
import {Confirmation} from './pages/Confirmation';
import ScrollToTop from './components/ScrollToTop';
import {Product} from './pages/Product';
import Production from "./pages/Production";
import Digital from "./pages/Digital";
import { AttachDetails } from "./pages/AttachDetails";
import Hardware from "./pages/Hardware";
import { FormProvider, PragProvider } from "./components/FormContext";





function App() {
  
  return (
    
     <CartProvider>
       <ProductProvider>
         <OpenProvider>
         <FormProvider>
         <PragProvider>
    <Router>
     <ScrollToTop>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/LandingPage" component={LandingPage} />
        <Route  path="/AboutUs" component={AboutUs}/>
        <Route exact path="/AboutUs/VisionAndMission" component={VisionAndMission}/>
        <Route exact path="/AboutUs/CoreValues" component={CoreValues} />
        <Route exact path="/AboutUs/WhatWeDo" component={WhatWeDo} />
        <Route exact path="/AboutUs/CEOMessage" component={CEOMessage} />
        <Route exact path="/AboutUs/OurConsultants" component={OurConsultants} />
        <Route exact path="/Career" component={Career}/>
        <Route exact path="/Career/WhyWorkWithUs" component={WhyWorkWithUs}/>
        <Route exact path="/Career/CurrentJobOpenings" component={CurrentJobOpenings} />
        <Route exact path="/Help" component={Help}/>
        <Route exact path="/Help/Feedback" component={Feedback}/>
        <Route exact path="/Help/FAQ" component={FAQ}/>
        <Route exact path="/Help/LogAComplaint" component={LogAComplaint}/>
        <Route exact path="/ContactUs" component={ContactUs}/>
        <Route exact path="/AllCategories" component={AllCategories}/>
        <Route exact path= "/AllCategories/TVAdvertising" component={TVAdvertising}/>
        <Route exact path= "/AllCategories/Radio" component={RadioAds}/>
        <Route exact path="/AllCategories/Cinema" component={Cinema}/>
        <Route exact path="/AllCategories/OutOfHome" component={OutOfHome}/>
        <Route exact path="/AllCategories/Print" component={Prints}/>
        <Route exact path="/AllCategories/Digital" component={Digital}/>
        <Route exact path="/AllCategories/Production" component={Production}/>
        <Route exact path="/AllCategories/Hardware" component={Hardware}/>
        <Route exact path="/Cart" component={Cart}/>
        <Route exact path="/Product" component ={Product}/>
        <Route exact path= "/NotFound" component={NotFoundPage} />
        <Route exact path= "/TodaysDeals" component={TodaysDeals}/>
        <Route exact path= "/Payment" component={MakePayment}/>
        <Route exact path= "/Payment/Confirmation" component={Confirmation}/>
        <Route exact path= "/formDetails" component={formDetails}/>
        <Route exact path= "/personalInfo" component={PersonalInfo}/>
        <Route exact path= "/Payment/Confirmation/AttachDetails" component={AttachDetails}/>
        <Redirect to="/NotFound"/>
      </Switch>
      </ScrollToTop>
    </Router>
    </PragProvider>
    </FormProvider>
    </OpenProvider>
    </ProductProvider>
    </CartProvider>
    
    
  );
}


export default App;

import React from 'react';
import Banner from './Components/Banner';
import FeatureSec from './Components/FeatureSec';
import NavBar from './Components/NavBar';
import CardSection from './Components/CardSection';
import Footer from './Components/Footer';


const App=()=>{
   
   return(
   <div>
        <NavBar key={1}/>
        <Banner key={2}/>
        <FeatureSec key={3} />
        <CardSection key={4} />
        <Footer key={5} />
    </div>)
}

export default App;
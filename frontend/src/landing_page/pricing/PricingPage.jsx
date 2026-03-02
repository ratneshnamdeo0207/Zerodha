import React from 'react';
import Hero from './Hero';
import Value from './value';
import AccountOpening from './AccountOpening';
import Demat from './Demat';
import OpenAccount from "../OpenAccount"
function PricingPage() {
    return ( 
        <>
            <Hero/>
            <Value/>
            <AccountOpening/>
            <Demat/>
            <OpenAccount/>
        </>
     );
}

export default PricingPage;
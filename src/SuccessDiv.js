import React, { Component } from 'react'
import Success from './Success';
import Logo1 from './logos/logo-1.jpg';
import Logo2 from './logos/logo-2.jpg';
import Logo3 from './logos/logo-3.jpg';
import Logo4 from './logos/logo-4.jpg';
import Logo5 from './logos/logo-5.jpg';
import Logo6 from './logos/logo-6.jpg';
import Logo7 from './logos/logo-7.jpg';
import Logo8 from './logos/logo-8.jpg';
import Logo9 from './logos/logo-9.jpg';
import Logo10 from './logos/logo-10.jpg';
import Logo11 from './logos/logo-11.jpg';
import Logo12 from './logos/logo-12.jpg';
class SuccessDiv extends Component{
    render(){
        return(
            <div class="clients-logo-wrapper text-center row">
            <Success image={Logo1} alt="" />
            <Success image={Logo2} alt="" />
            <Success image={Logo3} alt="" />
            <Success image={Logo4} alt="" />
            <Success image={Logo5} alt="" />
            <Success image={Logo6} alt="" />
            <Success image={Logo7} alt="" />
            <Success image={Logo8} alt="" />
            <Success image={Logo9} alt="" />
            <Success image={Logo10} alt="" />
            <Success image={Logo11} alt="" />
            <Success image={Logo12} alt="" />
          </div>
        );

    }
}
export default SuccessDiv;

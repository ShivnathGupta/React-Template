import React, { Component } from 'react'
import Portfolio from './Portfolic';
import Port1 from './portfolio/Port1.jpg';
import Port2 from './portfolio/Port2.jpg';
import Port3 from './portfolio/Port3.jpg';
import Port4 from './portfolio/Port4.jpg';
import Port5 from './portfolio/Port5.jpg';
import Port6 from './portfolio/Port6.jpg';
class Portfolioul extends Component{
    render(){
        return(
            <ul class="grid cs-style-3">
                <Portfolio image={Port1} alt="goslb" title="fdgdfg" name="dgfg" />
                <Portfolio image={Port2} alt="goslb" title="fdgdfg" name="dgfg" />
                <Portfolio image={Port3} alt="goslb" title="fdgdfg" name="dgfg" />
                <Portfolio image={Port4} alt="goslb" title="fdgdfg" name="dgfg" />
                <Portfolio image={Port5} alt="goslb" title="fdgdfg" name="dgfg" />
                <Portfolio image={Port6} alt="goslb" title="fdgdfg" name="dgfg" />
            </ul>
        );
    }
}
export default Portfolioul;

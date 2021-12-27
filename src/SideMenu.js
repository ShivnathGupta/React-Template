import React, { Component } from 'react'
import './custom.css';
import Menu from './Menu';
class SideMenu extends Component{
    render(){
        return(
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <Menu name="Dashbord" active="active-link" link="#" id="dashboard" />
                    <Menu name="UI Element" link="#"  />
                    <Menu name="Contact Us" link="#"  />
                    <Menu name="About Us" link="#"  />
                    <Menu name="Support" link="#"  />
                </ul>
    
            </div>
        );
    }
}
export default SideMenu;
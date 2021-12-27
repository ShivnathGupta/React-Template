import React from 'react'
import './custom.css';
const Header=()=>{
    return(
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar" />
                    <span class="icon-bar" />
                    <span class="icon-bar" />
                </button>
                <a class="navbar-brand" href="index.html"><img src="img/logo.png" alt="Basica" /></a>
            </div>
                   
    );
}
export default Header;
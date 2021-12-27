import React from 'react';
const Menu=(props)=>{
    return(
        <li className={props.active}><a href={props.link}>{props.name}</a></li>
    );
}
export default Menu;

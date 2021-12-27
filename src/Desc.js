import React from 'react'
const Desc=(props)=>{
    return( <div class="col-md-4 col-sm-6">
	        			<div class="service-wrapper">
		        			<i class={props.icon} ></i>
		        			<h3>{props.heading}</h3>
		        			<p>{props.desc}</p>
		        			<a href="#" class="btn">Read more</a>
		        		</div>
                    </div>);
                }
export default Desc;
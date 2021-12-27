import React from 'react'
const Portfolio=(props)=>{
    return(
<div class="col-md-4 col-sm-6">
    <figure>
        <img src={props.image} alt={props.alt} />
            <figcaption>
                <h3>{props.title}</h3>
                <span>{props.name}</span>
                <a href="portfolio-item.html">Take a look</a>
            </figcaption>
    </figure>
</div>
);
}
export default Portfolio;
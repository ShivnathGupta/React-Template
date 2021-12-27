import React from 'react'
import Sld from './Slides.jpg';
import Sld1 from './Slides1.jpg';
import Sld2 from './Slides2.jpg';
import Slides from './Slides';
const Slider=()=>{
    return(
        
        <section id="main-slider" className="no-margin">
            <div className="carousel slide">
                <ol className="carousel-indicators">
                <li data-target="#main-slider" data-slide-to="0" className="active"></li>
                <li data-target="#main-slider" data-slide-to="1"></li>
                <li data-target="#main-slider" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" >
                <Slides styl={{backgroundImage: `url(${Sld})`}} active="active" />
                <Slides styl={{backgroundImage: `url(${Sld1})`}} />
                <Slides styl={{backgroundImage: `url(${Sld2})`}} />
            </div>
            </div>
            <a className="prev hidden-xs" href="#main-slider" data-slide="prev">
                <i className="icon-angle-left"></i>
            </a>
            <a className="next hidden-xs" href="#main-slider" data-slide="next">
                <i className="icon-angle-right"></i>
            </a>
</section>);
}
export default Slider;

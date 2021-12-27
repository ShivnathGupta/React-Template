import React from 'react'
const Slides=(props)=>{
  

    return(
    <div className={`item ${props.active}`} style={props.styl}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="carousel-content centered">
                        <h2 className="animation animated-item-1">Welcome to BASICA! A Bootstrap3 Template</h2>
                        <p className="animation animated-item-2">Sed mattis enim in nulla blandit tincidunt. Phasellus vel sem convallis, mattis est id, interdum augue. Integer luctus massa in arcu euismod venenatis. </p>
                    </div>
                </div>
            </div>
        </div>
</div>);
}
export default Slides;
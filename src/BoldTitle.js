import React, { Component } from 'react';
export default class BoldTitle extends Component{
    render(){
    return(
<div class="section section-white">
    <div class="container">
      <div class="row">
        <div class="section-title">
            <h1>{this.props.title}</h1>
        </div>
        {this.props.data}
        </div>
        </div>
      </div>);
}
}


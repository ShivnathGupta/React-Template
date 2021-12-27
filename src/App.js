import React, { Component } from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Footer from './Footer';
import Slider from './Slider'
import Desc from './Desc';
import BoldTitle from './BoldTitle';
import SuccessDiv from './SuccessDiv'
import Action from './Action';
import Portfolioul from './Portfolicul';

class App extends Component{
  render(){
    return(
      <React.Fragment>
      <header className="navbar navbar-inverse navbar-fixed-top" role="banner">
        <div className="container">
          <Header />
          <SideMenu />
        </div>
      </header>

      <Slider />
      <Action />
      <div class="section section-white">
        <div class="container">
          <div class="row">
            <Desc icon="icon-home" heading="Aliquam in adipiscing" desc="Praesent rhoncus mauris ac sollicitudin vehicula. Nam fringilla turpis turpis, at posuere turpis aliquet sit amet condimentum" />
            <Desc icon="icon-briefcase" heading="Curabitur mollis" desc="Suspendisse eget libero mi. Fusce ligula orci, vulputate nec elit ultrices, ornare faucibus orci. Aenean lectus sapien, vehicula" />
            <Desc icon="icon-calendar" heading="Vivamus mattis" desc="Phasellus posuere et nisl ac commodo. Nulla facilisi. Sed tincidunt bibendum cursus. Aenean vulputate aliquam risus rutrum scelerisque" />
          </div>
        </div>
      </div>
      <BoldTitle title="Our Recent Success" data={<Portfolioul />} />
      <BoldTitle title="Our Recent Success" data={<SuccessDiv />} />
      <Footer />
      </React.Fragment>
    );
  }
}
export default App;

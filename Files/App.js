import React, { Component } from 'react';
import './App.css';
import Function_Component from './Function_Component.js';
import React_Fragement from './Fragement.js';
import Class_Component from './Class_Component.js';
import Function_Component_Props from './Function_Component_Props.js';
import Class_Component_Props from './Class_Component_Props.js'
import EventHandling from './EventHandling';
import Student from './ComposingComponent';
// function App(props) {
//     return (
//       <div>
//       <Student name={props.id} />
//       <Student name="Rishabh" />
//       <Student name="Rohit" />
//         </div>
//     );
// }
class App extends Component{
  state={
    name:"Raj Kumar"
  };

  buttonClick = () => {
     this.setState({name:"State Changed"});
    console.log(this.state.name);
    console.log(this.state.name);
      };
  render(){
    return(<div>
      <Student name={this.props.id} />
      <Student name="Rishabh" />
      <Student name="Rohit" />
      <Student name={this.state.name} />
      <input type="button" value="Press" onClick={this.buttonClick} />

      <React_Fragement /><br />
      <EventHandling roll="101" />
      <Function_Component /><br />
        <Function_Component_Props name="Shivnath" />
        <Function_Component_Props name="Rishabh" /><br />
        <Class_Component /><br />
        <Class_Component_Props name="Rohit" />
        <Class_Component_Props name="Abhisheck" /><br />
        <h1>hello</h1>
        </div>);
  }
}
export default App;

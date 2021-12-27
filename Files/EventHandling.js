import React,{Component} from 'react'
class EventHandling extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Shivnath",
            roll:this.props.roll
        };
            this.handleClickWithThis=this.handleClickWithThis.bind(this);
        }
        
    handleClickWithoutThis(){
        console.log("clicked:handleClickWithoutThis");
    }
    handleClickWithThis(){
        console.log("clicked:handleClickWithThis",this);
    }
    handleClickWithArrowFunction=()=>{
        console.log("clicked:handleClickWithArrowFunction",this);
        console.log(this.state.name);
        
        //alert(this.state.name)
    }
    render(){
        
        return(
            <div>
            <h1>Hello, {this.state.name} your Roll number is {this.state.roll}</h1>
            <h1>How are you</h1>
            <button onClick={this.handleClickWithoutThis}>Function Without This Keyword</button>
            <button onClick={this.handleClickWithThis}>Functioon with This Keyword</button>
            <button onClick={this.handleClickWithArrowFunction}>Arrow Function</button>
            </div>
        )
    }
}
export default EventHandling;
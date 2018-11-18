import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { makeSmall: false }; 

  constructor() {
    super();
    this.state = {
      height: "200",
      width: "200",
    }
  }
 


  plusSize = () => {
    console.log("clicked !!");
    this.setState((prevState, props) => ({
      height: prevState.height *1.1 ,
      width: prevState.width *1.1 ,
    }));
    this.setState((prevState ,props) => (
    console.log( prevState.height,'and', prevState.width ) ) )
  }

  minusSize = () => {
    console.log("clicked !!");
    this.setState((prevState, props) => ({
      height: prevState.height *0.9 ,
      width: prevState.width *0.9 ,
    }));
    this.setState((prevState ,props) => (
    console.log( prevState.height,'and', prevState.width ) ) )
  }

    render() { 
    return (
      <div className="App">
        <header className="App-header">
          <p>Click the square</p>
        </header>

        <Square
        
          color1={'#4e89e8'}
          width={this.state.width+ "px"}
          height={this.state.height+ "px"}
          right={"7px"}
          left={"10px"}
        />

        <div style={{
          position:"relative",
          right: "-840px",
          top: "10px"
      }}>
          <ChangeSizeButton action="Large"/>
          <button
          style={{
            display: 'block',
            cursor: 'pointer',
            width:'5%',
            height:"30%",
            margin: "15px 5px",
            textAlign:'center',
            backgroundColor: "gray",
            outline: 'none'
            }} onClick={this.plusSize}>bigger</button>
             <button
          style={{
            display: 'block',
            cursor: 'pointer',
            width:'5%',
            height:"30%",
            margin: "15px 5px",
            textAlign:'center',
            backgroundColor: "gray",
            outline: 'none'
            }} onClick={this.minusSize}>smaller</button>
          <ChangeSizeButton action="Small"/>
        </div>
      </div>
    );
  }

  
}


class ChangeSizeButton extends React.Component {   
    render() {
    return <button
    style={{
    display: 'block',
    cursor: 'pointer',
    width:'5%',
    height:"30%",
    margin: "15px 5px",
    textAlign:'center',
    backgroundColor: "gray",
    outline: 'none'
    }}
    onClick={this.minusSize}
    >{this.props.action}</button>;
  }

  changeSize = () => {
    console.log("clicked !!");
    this.setState({
      value: this.state.value * 2
    });
    console.log("after click : ${this.state.value}");
  }
 

}





const randmColor = props => {
  let color = "#";
  let ton =  Math.floor((Math.random() * 16)).toString(16);
  let ton1 =  Math.floor((Math.random() * 16)).toString(16);
  let ton2 =  Math.floor((Math.random() * 16)).toString(16);
  let ton3 =  Math.floor((Math.random() * 16)).toString(16);
for(let i = 0; i < 6; i++){
    color += "86"+ ton+ ton1 +ton2 +ton3 ;
  return color;

}
};


const VerticalSplit = props => (
  <React.Fragment>
    <Square
      color1={randmColor()}
      width="50%"
      height="100%"
      left={0}
    />{" "}
    <Square
      color1={randmColor()}
      left="50%"
      height="100%"
      width={"50%"}
    />
  </React.Fragment>
);

const HorizontalSlplit = props => (
  <React.Fragment>
    <Square
      color1={randmColor()}
      width="100%"
      height="50%"
      bottom={0}
    />{" "}
    <Square
      color1={randmColor()}
      bottom="50%"
      height="50%"
      width="100%"
    />
  </React.Fragment>
);

const SplitShower=(props)=>{
  if(props.show===false){
    return null;
  }
  
  if(props.show=='hor'){
    return <HorizontalSlplit {...props}/>
  
  }else{
    return <VerticalSplit {...props}/>
  }
}
class Square extends React.Component {
  state = { showSplit: false }; 

  handleLeftClick(e) {
    e.stopPropagation();

    console.log("THE left function was clicked.");
    this.setState({ showSplit: 'hor' });   
  }

  handleRightClick(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log("THE right function was clicked."); // can not write if, or return. where should I write it ?
    this.setState({ showSplit: 'ver' });
  }


  render() {
    return (
      <div  show={this.state.makeSmall}
        className="Square"
        style={{
          position: "absolute",
          left: this.props.left,
          right: this.props.right,
          bottom: this.props.bottom,
          margin: "auto",
          backgroundColor:this.props.color1,
          width: this.props.width,
          height: this.props.height,
          cursor: "pointer"
        }}
        onClick={this.handleLeftClick.bind(this)}
        onContextMenu={this.handleRightClick.bind(this)}
      >
      
      <div style={{ position: "relative", height: "100%", width: "100%" }}>        
      <SplitShower show={this.state.showSplit} color1={this.props.color1} color2={this.props.color2} />  
      </div>
      </div>
    );
  }
}

export default App;

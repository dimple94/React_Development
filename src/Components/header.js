import React from 'react';

// const Header = () =>{
//     return <h2> This is header</h2>
// }

class Header extends React.Component{

    constructor(props){
    super(props);
    this.state = {
        keywords: ""
    }
    }
  inputChange(event){
      this.setState({keywords:event.target.value});
      this.props.newsSearch(event.target.value);
  }
    render(){
        //console.log("Data in JSON :: ", JSON);
      return(
          <header>
              <div className="logo">LOGO</div>
              <input onChange={this.inputChange.bind(this)}></input>
              <div>{this.state.keywords}</div>
          </header>
      )
  }
}

export default Header;
import React, { Component } from 'react'

class Welcome extends Component{
    constructor(){
        super();

        this.state={
            clicks:0
        }
    }

    updateClicks=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }

    render(){
        return(
            <div>
                <h1 onClick={this.updateClicks}>Welcome to {this.props.title} ({this.state.clicks})</h1>
                <p className="description">Thank you for coming</p>
                {/* <img src="logo.ong"/>
                <lable htmlFor="username">
                    Name
                    <input type="text" name="username"/>
                </lable> */}
            </div>
        )
    }
}

export default Welcome;

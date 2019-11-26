import React, {Component} from 'react'

class Friends extends Component{
    constructor(){
        super();

        this.state={
            friends:["Ram","Robert","Rahim"]
        }
    }

    componentWillMount(){
        console.log('Before render')
    }

    componentDidMount(){
        console.log('After render')
    }

    render(){
        return(
            <div>
                <h1>Friends</h1>
                <ul>
                    {
                        this.state.friends.map((friend,index)=>{
                            return <li key={friend}>{friend}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Friends;
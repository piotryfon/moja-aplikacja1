import React from 'react';

class Message extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isActive: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        //debugger
        this.setState(()=>({
            isActive: !this.state.isActive
        }))
    }

    render(){
        const text = "Jakiś tekst do wyświetlenia."
        return(
            <React.Fragment>
                <h3>Message.js</h3>
                <button onClick={this.handleClick}>{this.state.isActive ? "Ukryj":"Pokaż"}</button>
                {this.state.isActive ? <p>{text}</p> : null}
            </React.Fragment>
        )
    }
}
export default Message;
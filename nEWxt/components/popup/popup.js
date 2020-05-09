import React, { Component } from "react";

class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }

    }

    componentDidMount() {
        setTimeout(() => {
            this.popup()
        }, 15000);
    }

    popup = () => {
        this.setState({ show: true })
    }

    render() {
            var github =  this.props.data.section.github.github; [0].url 
            var text =  this.props.data.section.box.textBoxContent  
        return (
            <section className={this.state.show === true ? "popup" : "popup close"}>
                <a href={github[1].value}><img src={github[0].value}></img></a>
                <div className="popup-content">
                    <h3>{text[0].value}</h3>
                    <p> {text[1].value} </p>
                </div>
                <div onClick={ ()=> {this.setState({show:false})}} className={this.state.show === true ? "cross" : "cross close"}>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </section>
        )
    }
}
export default Popup


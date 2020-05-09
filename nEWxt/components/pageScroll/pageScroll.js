import React, { Component } from "react"

class Scroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: 0,
        };
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick = id => {
        this.setState({ activeLink: id });
    };
    render() {
        const menu = this.props.layout.header.headerMenu.data;
        const activeLink  = this.state;
        return (
            <div className="scroll-container">
                <ul>
                    {menu.map((item, i) => {
                        return <a className="dot" key={i} href={`#${item.label}`}><li></li></a>
                    })}
                </ul>
            </div>
        )
    }
}
export default Scroll
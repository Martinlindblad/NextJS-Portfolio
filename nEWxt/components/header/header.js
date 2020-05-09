import React, { Component } from "react";
// import styles from "./header.module.scss"
import Logo from "../logo/logo"


class Header extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        // const logo = this.props.layout.header.headerMenu.data
        const menu = this.props.layout.header.headerMenu.data
 
        return (
            <div id="Start"  data-inviewanimation class="header">
            <Logo styles={this.props.styles} />
                <nav data-inviewanimation class="navbar">
                    <ul>
                        {menu.map((item, i) => {
                            return <a key={i} href={`#${item.label}`}><li>{item.label}</li></a>
                        })}
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Header



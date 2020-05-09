import React, { Component } from "react";
// import styles from "./hero.module.scss"
import Background from "../background/background"

class Hero extends Component {
    constructor(props) {
        super(props)
        this.sendWebpage = this.sendWebpage.bind(this)
    }

    sendWebpage = (webpage) => {
        this.props.changeCurrentPage(webpage);
    }
    render() {
        // const backgroundVideo = this.props.data.hero.video[1];
        const backgroundVideo = this.props.data.hero.video[1].url;
        const textBoxContent = this.props.data.hero.textBoxContent;

        return (
            <div data-inviewanimation class="hero">
                <div class="videoHidden"></div>
                <div data-inviewanimation class="video">
                    <Background data={this.props.data} styles={this.props.styles} />
                    <div class="intro">
                        <div class="slogo">
                            <div class="slogoBg">
                                <video class="backgroundVideo" preload loop={true} muted autoPlay autoPlay muted >
                                    <source src={`${backgroundVideo}`} type="video/mp4" />
                                </video>
                            </div>
                            <div data-inviewanimation class="welcome">
                                <h1>{textBoxContent[1].value}</h1>
                                <div class="welcomeTextContainer">
                                    <div class="welcomeText">
                                        <p>{textBoxContent[2].value}</p>
                                        <h2>{textBoxContent[3].value}</h2>
                                    </div>
                                </div>
                                <h3>{textBoxContent[0].value}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hero



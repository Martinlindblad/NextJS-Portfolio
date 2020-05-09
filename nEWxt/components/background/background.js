import React, { Component } from 'react';
// import styles from "../background/background.module.scss"

class Background extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const styles = this.props.styles;
        const backgroundVideo = this.props.data.hero.video[0].url;
        return(
                <div class="videoContainer">
                    <video class="backgroundVideo" preload loop={true} muted autoPlay="autoPlay" muted >
                        <source src={`${backgroundVideo}`} type="video/mp4" />
                    </video>
                </div>
        )
    }

} export default Background
import React, { Component } from "react";
// import styles from "./about.module.scss"
import Swipe from "../swiper/swiper"

class About extends Component {
  constructor(props) {
    super(props)

    this.sendWebpage = this.sendWebpage.bind(this)
  }
  componentDidMount() {
    const textBoxContent = this.props.data.about.textBoxContent;
    console.log(textBoxContent);
  }

  sendWebpage = (webpage) => {
    this.props.changeCurrentPage(webpage);
  }
  render() {
    const me = this.props.data.about[0];
    const link = this.props.data.about[0].link;
    const socialMedia = this.props.data.about[0].social;
    var github =  this.props.data.section.github.github; [0].url 
    return (
      <div id="Projects" data-inviewanimation class="aboutContainer">
        <section class="about">
          <div class="aboutContent" data-inviewanimation>
            
            <h2>{me.header2.value}</h2>
            <p>{me.textBoxContent[0].value}</p>
            <div  data-inviewanimation class="profilePic" style={{ backgroundImage: `url(${me.image.url})` }}></div>
            <div class="socialMedia">
              <ul>
                {link.map((listItem, key) => {
                  return <li data-inviewanimation class="socialMediaLink" key={key}><a href={listItem.value}><img src={socialMedia.image[key].url}></img></a></li>         
                })}
                 <li data-inviewanimation class="socialMediaLink"><a href={github[1].value} ><img src={github[0].value}></img></a></li>
              </ul>
            </div>
          </div>
        </section>
        <Swipe data={this.props.data} layout={this.props.layout} styles={this.props.styles} />
      </div>
    )
  }
}
export default About



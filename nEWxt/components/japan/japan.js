import React, { Component } from "react";
// import styles from "../japan/japan.module.scss"
import Parallax from 'parallax-js'
import Sakura from "../sakura/sakura";


class Japan extends Component {
  constructor(props) {
    super(props)

    this.sendWebpage = this.sendWebpage.bind(this)
  }

  sendWebpage = (webpage) => {
    this.props.changeCurrentPage(webpage);
  }

  render() {
    const styles = this.props.styles;
    const japaneseSection = this.props.data.japanese;
    const intro = japaneseSection.intro;
    const info = japaneseSection.info;
    return (
      <div class="recon-container">
        <section class="japanContainer">
          <div class="recon"></div>
          <div id="Japanese" class="japan">
            <div class="japanBg" style={{ backgroundImage: `url(${intro.image.url})` }}></div>
            <div class="japaneseInfoContainer">
              <div data-inviewanimation class="japanContent">
                <h2>{intro.header2.value}</h2>
                <p>{intro.textBoxContent.value}</p>
              </div>
              <div class="japaneseInfo">
                {info.map((inf, key) => {
                  return (
                    <div data-inviewanimation key={key} class="infoItem">
                      <h3>{inf.header3.value}</h3>
                      <p>{inf.textBoxContent.value}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <Sakura layout={this.props.layout} data={this.props.data} />
          </div>

        </section>
      </div>
    )
  }
}
export default Japan



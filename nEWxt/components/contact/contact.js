import React, { Component } from "react";


class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: "",
      body: "",
      show: "subject"
    }
    this.handleSubject = this.handleSubject.bind(this);
    this.handleBody = this.handleBody.bind(this);
  }
  handleSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }
  handleBody(e) {
    this.setState({
      body: e.target.value
    });
  }


  render() {
    var contact = this.props.data.contact;
    var link = this.props.data.about[0].link;
    var socialMedia = this.props.data.contact.social;
    var profile = contact.profile;
    var github =  this.props.data.section.github.github; [0].url 
    return (
      <section class="contact-container">
        <div className="background-container"> </div>
        <div id="Contact" class="contact">
          <div className="info-container">
            <div className="info" >
              <div data-inviewanimation class="contact-img" style={{ backgroundImage: `url(${profile.url})` }}></div>
              <div>
                <div class="socialMedia">
                  <ul>
                    {link.map((listItem, key) => {
                      return <li data-inviewanimation class="socialMediaLink" key={key}><a href={listItem.value}><img src={socialMedia.image[key].url}></img></a></li>
                    })}
                     <li data-inviewanimation  class="socialMediaLink"><a href={github[1].value}><img src={github[0].value}></img></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div data-inviewanimation className="preview-container">
              <h3>E-mail Preview</h3>
              <h4>Subject</h4>
              <label data-inviewanimation class className="subject" for="subject">{this.state.subject}</label>
              <h4>Text</h4>
              <label data-inviewanimation class for="body">{this.state.body}</label>
            </div>
          </div>
        </div>

        <div className="content-container">
          <input className={this.state.show === "subject" ? "open" : ""} onChange={this.handleSubject} name="subject" placeholder="Type subject.." value={this.state.subject} type="text" />
          <textarea className={this.state.show === "body" ? "open" : ""} onChange={this.handleBody} type="text" value={this.state.body} placeholder="Tell me what's up.." name="body"></textarea>
        </div>

        <div  className="button-container">
          <div data-inviewanimation class onClick={() => { this.setState({ show: "subject" }) }} className="prev-btn">Go back</div>
          {this.state.show === "subject" ? <div data-inviewanimation class onClick={() => { this.setState({ show: "body" }) }} className="next-btn">Continue</div>
            : <a className="next-btn" href={`mailto:martin.lindblad1@gmail.com?subject=${this.state.subject}&body=${this.state.body}`}>Submit</a>}
        </div>

      </section>
    )
  }
}
export default Contact



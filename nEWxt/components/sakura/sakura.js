import React, { Component } from "react";

class Sakura extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sakura: false,
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.sakuraFall();
    }, 38000);
  }

  sakuraFall() {
    this.setState({ sakura: Math.random() });
  }


  
  render() {
    // const styles = this.props.styles;
        var numRand = Array.from({ length: 60 }, () => Math.floor(Math.random() * 60).toString());;
    

    // const sakuraSection = this.props.data.japanese;
    return (
      <section key={this.state.sakura} class="sakuraContainer">
        {numRand.map((xPos, key) => {
          return (
            <div style={{ right: xPos + '%' }} key={key} class="sakuraLeaf"></div>
          )
        })}

      </section>
    )
  }
}
export default Sakura



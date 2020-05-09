import React, { Component } from 'react';
// import styles from "../swiper/swiper.module.scss"

class Swipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            time: 0,
            amountOfProjects: 0,
            active: "active"
        }
        this.handleSlide = this.handleSlide.bind(this);
    }
    componentDidMount() {
        this.startSlide();
    }

    startSlide = () => {
        const projects = document.querySelectorAll(".swiper_project__fp0Zr")
        setInterval(() => {
            if (this.state.time === 6) {
                this.setState({ time: 0 })
                if (this.state.count < projects.length - 1) {
                    return this.setState({ count: this.state.count + 1 })
                }
                else {
                    return this.setState({ count: 0 })
                }
            }
            else {
                this.setState({ time: this.state.time + 1 })
            }
        }, 2000);
    }

    handleSlide = (step) => {
        let currentCount = this.state.count;
        const projects = document.querySelectorAll(".project")
        step == "next" && currentCount < projects.length - 1 ? this.setState({ count: currentCount + 1, time: 0 }) :
        step == "prev" ? currentCount < 1 ? (this.setState({ count: projects.length - 1, time: 0 })) 
        : (this.setState({ count: currentCount - 1, time: 0 })) : this.setState({ count: 0 });
    }

    render() {
        const projects = this.props.data.projects;
        // const styles = this.props.styles;
        return <main data-inviewanimation class="projects">
            <h2>Previous Work </h2>
            <section>
                <div class="buttonContainer">
                    <a onClick={() => { this.handleSlide("next") }}><span>Next</span></a>
                    <a onClick={() => { this.handleSlide("prev") }}><span>Previous</span></a>
                </div>

                {projects.map((project, key) => {
              return  <div data-inviewanimation key={key} className={`project ${this.state.count === key ? 'active' : 'deactive'}`}>
                        <h3>{project.textBoxContent[0].value}</h3>
                        <p>{project.textBoxContent[1].value}</p>
                      <div style={{ backgroundImage: `url(${project.image.url})` }} class="image">
                    <button class="center" href={project.link.value}>Visit Site</button></div>
                </div>
                })} 
            </section>
        </main>
    }
}

export default Swipe
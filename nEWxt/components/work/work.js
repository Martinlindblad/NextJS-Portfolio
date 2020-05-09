import React, { Component } from 'react';

class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        let work = this.props.data.work;
        console.log(work)
    }

    render() {
        let work = this.props.data.work;
        let start = work.start;
        let worksection = work.workSection;
        let sphinxly = work.special;


        return (
            <div class="work">
                {/* <div id="Experience" class="parallax-container" style={{ backgroundImage: `url(${start.image.url})` }}> */}
                <div id="Experience" class="parallax-container" >
                    <div class="background">
                        <div class="background-content">
                            <h2 data-inviewanimation>{start.header2.value}</h2>
                        </div>
                        <div class="space-maker"></div>

                    </div>
                    <div class="content-container">

                        {worksection.map((exp, key) => {
                            return <div key={key} data-inviewanimation class="content">
                                <div className="img" style={{ backgroundImage: `url(${exp.image.url})` }} ></div>
                                <div class="work-text-container">
                                    <div class="work-text">
                                        <h3 data-inviewanimation>{exp.header3.value}</h3>
                                        {exp.textBoxContent.map((x) => {
                                            return (
                                                <p>{x.value}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        })}

                        <div className="content">
                            <div class="work-text-container">
                                <div class="img" style={{ backgroundImage: `url(${sphinxly.image[0].url})` }}></div>
                                <div class="work-text">
                                <h3>{sphinxly.header4[0].value}</h3>
                                    <p>{sphinxly.textBoxContent[0].value}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Work
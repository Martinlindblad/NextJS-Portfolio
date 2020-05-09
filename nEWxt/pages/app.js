import getEasywebData from "../easyweb-api";

import Header from "../components/header/header"
import Hero from "../components/hero/hero"
import About from "../components/about/about"
import Japan from "../components/japan/japan";
import Work from "../components/work/work";
import Contact from "../components/contact/contact";
import Scroll from "../components/pageScroll/pageScroll";
import Popup from "../components/popup/popup";


const Start = ({ data, layout }) => {
  console.log(data, layout, );

  return (
    <div id="scene">
      <Scroll layout={layout} data={data}/>
      <Popup layout={layout} data={data}/>
      <Header layout={layout} data={data} />
      <Hero layout={layout} data={data} />
      <div className="space-maker"></div>
      <About layout={layout} data={data} />
      <div className="space-maker"></div>
      <Work layout={layout} data={data} />
      <div className="space-maker"></div>
      <Japan layout={layout} data={data} /> 
      <div className="space-maker"></div>
      <Contact layout={layout} data={data} /> 
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps(ctx) {
  // Simple example to illustrate token call
  //
  var data = await getEasywebData("/routes");
  var layout = await getEasywebData("/load/layout");
  return { props: { data, layout } };
}

export default Start;

import getEasywebData from "../easyweb-api";


const Page = ({ data, menu }) => {
  console.log(data, menu);
  return (
    <div></div>
  );
};

// This gets called on every request
export async function getServerSideProps(ctx) {
  // Simple example to illustrate token call
  //
  var data = await getEasywebData("/routes");
  var menu = await getEasywebData("/load/layout");
  return { props: { data, menu } };
}

export default Page;

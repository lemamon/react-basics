const element = React.createElement;

const LikeButton = () => {
  return element("button", { onClick: () => console.log("liked") }, "Like");
};

const domContainer = document.querySelector("#root");
ReactDOM.render(element(LikeButton), domContainer);

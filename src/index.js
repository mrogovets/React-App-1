import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";

const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image:
    "https://wordblanks.s3.amazonaws.com/story/featured/thumb-avengers-infinity-lib-1523483088.jpg",
  overview:
    "A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality.",
};

function Image(props) {
  return <img src={props.src} alt={props.alt} />;
}

// function MovieItem(props) {
//   console.log("MovieItem props = ", props);
//   const {
//     data: { title, vote_average, image },
//   } = props;
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{vote_average}</p>
//     </div>
//   );
// }

// MovieItem = new React.Component()
class MovieItem extends React.Component {
  render() {
    const {
      data: { title, vote_average, image },
    } = this.props;
    console.log(this);
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

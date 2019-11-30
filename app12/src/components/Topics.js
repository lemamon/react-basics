import React from "react";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

const tops = [
  {
    path: "react",
    text: "Topic 1 about bla bla bla"
  },
  {
    path: "angular",
    text: "Topic 2 about bla bla bla"
  },
  {
    path: "vue",
    text: "Topic 3 about bla bla bla"
  }
];

const Topics = () => {
  const { url, path } = useRouteMatch();

  return (
    <React.Fragment>
      <ul>
        {tops.map((el, idx) => (
          <li key={idx}>
            <Link to={`${url}/${el.path}`}> {el.text}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path={`${path}/:topicName`} component={Topic} />
      </Switch>
    </React.Fragment>
  );
};

const Topic = () => {
  const { topicName } = useParams();
  return <h1>{topicName}</h1>;
};

export { Topics };

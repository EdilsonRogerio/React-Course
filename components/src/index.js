import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Edilson"
        timeAdo="Hoje as 4:45 AM"
        comment="Hello"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Shelton"
        timeAdo="Hoje as 14:45 PM"
        comment="HI"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Yuran"
        timeAdo="14 de setembro de 2022"
        comment="How you doing"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Charlen"
        timeAdo="Há dois dias"
        comment="Nice to meet ya!!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Shirley"
        timeAdo="Há 4 semanas"
        comment="Olá!!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
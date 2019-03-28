import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import { GlobalStyle } from "./styles/global";
import profile from "./assets/images/profile.png";

class App extends Component {
  state = {
    posts: [
      { nome: "Rodrigo Gomes", profile: { profile } },
      { nome: "Rodrigo Gomes", profile: { profile } },
      { nome: "Rodrigo Gomes", profile: { profile } },
      { nome: "Rodrigo Gomes", profile: { profile } },
      { nome: "Rodrigo Gomes", profile: { profile } },
      { nome: "Rodrigo Gomes", profile: { profile } }
    ]
  };

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        {this.state.posts.map(post => (
          <Post nome={post.nome} profile={post.profile} />
        ))}
      </Fragment>
    );
  }
}

export default App;

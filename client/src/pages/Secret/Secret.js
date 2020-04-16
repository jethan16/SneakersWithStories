import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";
import StoryForm from "../../components/StoryForm/StoryForm";

class NewStory extends Component {
  // static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: "",
  };

  handleSubmit = (
    title,
    name,
    silhouette,
    shoes,
    gallery,
    quote,
    highlights,
    summary
  ) => {
    API.Stories.create(
      title,
      name,
      silhouette,
      shoes,
      gallery,
      quote,
      highlights,
      summary
    )
      .then((response) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.setState({
            error:
              "ERROR: An error has occured and your story could not be submitted at this time",
          });
        }
        if (err.response.status === 404) {
          console.log(err);
        }
      });
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/secret" },
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return <StoryForm onSubmit={this.handleSubmit} />;
  }
}

export default NewStory;

import React, { Component } from "react";

import Octicon, { Mail, Key } from "@githubprimer/octicons-react";

import "./style.css";
class RegistrationForm extends Component {
  state = {
    title: "",
    name: "",
    silhouette: "",
    shoes: "",
    gallery: "",
    quote: "",
    highlights: "",
    summary: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    const {
      title,
      name,
      silhouette,
      shoes,
      gallery,
      quote,
      highlights,
      summary,
    } = this.state;

    this.props.onSubmit(
      title,
      name,
      silhouette,
      shoes,
      gallery,
      quote,
      highlights,
      summary
    );
    event.preventDefault();
    console.log(this.state)
  };

  render() {
    const {
      title,
      name,
      silhouette,
      shoes,
      gallery,
      quote,
      highlights,
      summary,
    } = this.state;

    return (
      <form className="add-story-form" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title-input"
          value={title}
          onChange={this.handleInputChange}
          placeholder="Story Title"
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name-input"
          value={name}
          onChange={this.handleInputChange}
          placeholder="Story Name"
        />
        <label htmlFor="silhouette">Silhouette:</label>
        <input
          type="text"
          name="silhouette"
          id="silhouette-input"
          value={silhouette}
          onChange={this.handleInputChange}
          placeholder="Story Silhouette"
        />
        <label htmlFor="shoes">Shoe Images</label>
        <textarea
          name="shoes"
          id="shoes"
          rows="1"
          value={shoes}
          onChange={this.handleInputChange}
          placeholder="Image1.jpg, Image2.jpg"
        />
        <label htmlFor="gallery">Gallery Images</label>
        <textarea
          type="text"
          name="gallery"
          id="gallery"
          rows="1"
          value={gallery}
          onChange={this.handleInputChange}
          placeholder="Image1.jpg, Image2.jpg"
        />
        <label htmlFor="quote">Pull Quote:</label>
        <input
          type="text"
          name="quote"
          id="quote"
          value={quote}
          onChange={this.handleInputChange}
          placeholder="Story Pull Quote"
        />
        <label htmlFor="highlights">Highlights:</label>
        <textarea
          name="highlights"
          id="highlights"
          rows="1"
          value={highlights}
          onChange={this.handleInputChange}
          placeholder="Highlight1, Highlight2"
        />
        <label htmlFor="summary">Story Summary:</label>
        <textarea
          name="summary"
          id="summary"
          value={summary}
          onChange={this.handleInputChange}
          rows="1"
          placeholder="Story Summary"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RegistrationForm;

import React, { Component } from "react";
import axios from "axios";
//import { Redirect } from 'react-router-dom';

import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";
import "./style.css"
 

class Story extends Component {
  static contextType = AuthContext;

  state = {
    title: "",
    name: "",
    silhouette: "",
    shoeImages: [],
    galImages: [],
    pullQuote: "",
    highlights: [],
    storySummary: "",
  };

  // handleChange = event => {
  //   this.setState({ name: event.target.value })
  //   console.log(event.target.value);
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    const newStory = {
      title: this.state.title,
      name: this.state.name,
      silhouette: this.state.silhouette,
      shoeImages: [this.state.shoeImage1, this.state.shoeImage2, this.state.shoeImage3, this.state.shoeImage4, this.state.shoeImage5],
      galImages: [this.state.galleryImage1, this.state.galleryImage2, this.state.galleryImage3, this.state.galleryImage4, this.state.galleryImage5],
      pullQuote: this.state.pullRequest,
      highlights: this.state.highlights,
      storySummary: this.state.storySummary
    };
    axios
      .post("/api/stories", {newStory})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    // this.props.onSubmit(email, password, passwordConfirm);
    
  };
  // componentDidMount() {

  // API.Secrets.getAll(this.context.authToken)
  //   .then(response => response.data)
  //   .then(secrets => this.setState({ secrets }))
  //   .catch(err => {
  //     if (err.response.status === 401) {
  //       return this.setState({ error: "Unauthorized. Please login." });
  //     }

  //     console.log(err);
  //   })
  //   .finally(() => this.setState({ isLoading: false }));
  // }


  render() {
    return (
      
      <form className="add-story-form" onSubmit={this.handleSubmit}>
        <label for="title">Title:</label>
        <input type="text" name="title" id="title-input" />
        <label for="name">Name:</label>
        <input type="text" name="name" id="name-input" />
        <label for="silhouette">Silhouette:</label>
        <input type="text" name="silhouette" id="silhouette-input" />
        <label for="shoe-image1">Shoe Image 1</label>
        <input
          type="text"
          name="shoe-image1"
          id="shoe-image1"
        />
        <label for="shoe-image2">Shoe Image 2</label>
        <input
          type="text"
          name="shoe-image2"
          id="shoe-image2"
        />
        <label for="shoe-image3">Shoe Image 3</label>
        <input
          type="text"
          name="shoe-image3"
          id="shoe-image3"
        />
        <label for="shoe-image4">Shoe Image 4</label>
        <input
          type="text"
          name="shoe-image4"
          id="shoe-image4"
        />
        <label for="shoe-image5">Shoe Image 5</label>
        <input
          type="text"
          name="shoe-image5"
          id="shoe-image5"
        />
        <label for="gallery-image1">Gallery Image 1</label>
        <input
          type="text"
          name="gallery-image1"
          id="gallery-image1"
        />
        <label for="gallery-image2">Gallery Image 2</label>
        <input
          type="text"
          name="gallery-image2"
          id="gallery-image2"
        />
        <label for="gallery-image3">Gallery Image 3</label>
        <input
          type="text"
          name="gallery-image3"
          id="gallery-image3"
        />
        <label for="gallery-image4">Gallery Image 4</label>
        <input
          type="text"
          name="gallery-image4"
          id="gallery-image4"
        />
        <label for="gallery-image5">Gallery Image 5</label>
        <input
          type="text"
          name="gallery-image5"
          id="gallery-image5"
        />
        <label for="pull-quote">Pull Quote:</label>
        <textarea
          name="pull-quote"
          id="pull-quote"
          cols="30"
          rows="1"
        ></textarea>
        <label for="highlights">Highlights:</label>
        <input type="text" name="highlights" id="highlights" />
        <label for="story-summary">Story Summary:</label>
        <textarea
          name="story-summary"
          id="story-summary"
          cols="30"
          rows="1"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      // <div className='Secret'>
      //   <div className='row'>
      //     <div className='col'>
      //       {this.state.isLoading
      //         ? <div className='alert alert-success'>Loading...</div>
      //         : this.state.error
      //           ? <div className='alert alert-danger'>{this.state.error}</div>
      //           : <div>
      //             <p>Shh, the secret is...</p>
      //             <p><em>{this.state.secrets[0].message}</em></p>
      //           </div>}
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Story;

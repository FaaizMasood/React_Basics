import React, { Component } from "react";

export class Profile extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.warn("called life cycle");
  }
  render() {
    return (
      <div>
        <h1>Profile Component</h1>
      </div>
    );
  }
}

export default Profile;

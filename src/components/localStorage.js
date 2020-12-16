import React, { Component } from "react";

export default class FormDataComponent extends Component {
  userData;

  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      body: "",
    };
  }

  // Form Values
  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeBody(e) {
    this.setState({ body: e.target.value });
  }

  // React Life Cycle
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        title: this.userData.title,
        body: this.userData.body,
      });
    } else {
      this.setState({
        title: "",
        body: "",
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.props);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>body</label>
            <input
              type="text"
              className="form-control"
              value={this.state.body}
              onChange={this.onChangeBody}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

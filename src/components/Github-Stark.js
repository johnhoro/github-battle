import React from "react";
import Card from "./Card";

class Github extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: "All",
      data: [],
    };
  }
  handleChange = (event) => {
    this.setState({
      tags: event.target.innerText,
    });
  };
  componentDidMount() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.tags}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.items });
      });
  }
  componentDidUpdate(_prevProps, prevState) {
    if (prevState.tags !== this.state.tags) {
      fetch(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.tags}&sort=stars&order=desc&type=Repositories`
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({ data: data.items });
        });
    }
  }
  render() {
    let tag = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <>
        <ul className="tags">
          {tag.map((t, i, arr) => (
            <span
              className={this.state.tags === arr[i] ? "active-nav " : ""}
              onClick={(event) => this.handleChange(event)}
            >
              {t}
            </span>
          ))}
        </ul>
        <Card allCard={this.state.data} />
      </>
    );
  }
}

export default Github;

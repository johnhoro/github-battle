import React from "react";

class Battle extends React.Component {
  constructor() {
    super();
    this.state = {
      userOne: null,
      userTwo: null,
      inputOne: "",
      inputTwo: "",
      battle: true,
      scoreOne: null,
      scoreTwo: null,
    };
  }
  handleChange = ({ target }) => {
    var { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event, label) => {
    event.preventDefault();
    if (label === "submitOne") {
      this.fetchData(this.state.inputOne, "userOne");
    } else {
      this.fetchData(this.state.inputTwo, "userTwo");
    }
  };
  fetchData = (input, user) => {
    fetch(`https://api.github.com/users/${input}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          [user]: data,
        });
      });
  };
  handleCross = () => {
    this.setState({
      userOne: null,
    });
  };
  handleCrossTwo = () => {
    this.setState({
      userTwo: null,
    });
  };
  handleBattle = () => {
    this.setState({
      battle: !this.state.battle,
      scoreOne:
        this.state.userOne.followers * 20 + this.state.userOne.public_repos,
      scoreTwo:
        this.state.userTwo.followers * 20 + this.state.userTwo.public_repos,
    });
  };
  render() {
    return (
      <>
        {this.state.battle ? (
          <div>
            <h1 className="heading">Players</h1>
            <span className="flex justify container player-battle">
              <span className="">
                <div className="text-battle">Enter Two User Name</div>
                <div className="font-tag">
                  <i class="fas fa-users"></i>
                  {/* <i class="fa-solid fa-user-group"></i> */}
                </div>
              </span>
              <span>
                <div className="text-battle">Battle</div>
                <div className="font-tag">
                  <i class="fas fa-fighter-jet"></i>
                </div>
              </span>
              <span>
                <div className="text-battle">See winner</div>
                <div className="font-tag">
                  <i class="fas fa-trophy"></i>
                </div>
              </span>
            </span>
            <div className="container flex">
              <div>
                <label>Player One</label>
                {this.state.userOne ? (
                  <div className="input-card">
                    <img
                      className="input-img"
                      src={this.state.userOne.avatar_url}
                      alt={"j"}
                    />
                    <span className="input-name">
                      {this.state.userOne.login}
                    </span>
                    <span onClick={this.handleCross} className="cross">
                      <i class="fas fa-times-circle"></i>
                    </span>
                  </div>
                ) : (
                  <div className="flex-40 flex">
                    <input
                      type="text"
                      onChange={(event) => this.handleChange(event)}
                      name="inputOne"
                      value={this.state.inputOne}
                      placeholder="Githubusername"
                    />
                    <button
                      onClick={(event) => this.handleSubmit(event, "submitOne")}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
              <div>
                <label>Player Two</label>
                {this.state.userTwo ? (
                  <div className="input-card">
                    <img
                      className="input-img"
                      src={this.state.userTwo.avatar_url}
                      alt="i"
                    />
                    <span className="input-name">
                      {this.state.userTwo.login}
                    </span>
                    <span onClick={this.handleCrossTwo} className="cross">
                      <i class="fas fa-times-circle"></i>
                    </span>
                  </div>
                ) : (
                  <div className="flex-40 flex">
                    <input
                      onChange={(event) => this.handleChange(event)}
                      type="text"
                      name="inputTwo"
                      value={this.state.inputTwo}
                      placeholder="Githubusername"
                    />
                    <button
                      onClick={(event) => this.handleSubmit(event, "submitTwo")}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
            </div>
            {this.state.userOne && this.state.userTwo ? (
              <div className="btn-battle">
                <span onClick={this.handleBattle} className="btn-b">
                  Battle
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="container flex">
            <div className="card card-battle">
              <ul className="battle-li">
                <li className="winner">
                  {this.state.scoreTwo < this.state.scoreOne
                    ? "Winner"
                    : this.state.scoreTwo > this.state.scoreOne
                    ? "Loser"
                    : this.state.scoreTwo === this.state.scoreOne
                    ? "Tie"
                    : ""}
                </li>
                <div>
                  <img
                    className="img-width"
                    src={this.state.userOne.avatar_url}
                    alt=""
                  />
                </div>
                <li>Score: {this.state.scoreOne}</li>
                <li>{this.state.userOne.login}</li>
                <li>
                  <span>
                    <i class="fas fa-user"></i>
                  </span>
                  <span>{this.state.userOne.followers} Followers</span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-user"></i>
                  </span>
                  <span>{this.state.userOne.following} Following</span>
                </li>
                <li>{this.state.userOne.public_repos} repositories</li>
              </ul>
            </div>
            <div className="card card-battle">
              <ul className="battle-li">
                <li className="winner">
                  {this.state.scoreTwo > this.state.scoreOne
                    ? "Winner"
                    : this.state.scoreTwo < this.state.scoreOne
                    ? "Loser"
                    : this.state.scoreTwo === this.state.scoreOne
                    ? "Tie"
                    : ""}
                </li>
                <li>
                  <div>
                    <img
                      className="img-width"
                      src={this.state.userTwo.avatar_url}
                      alt=""
                    />
                  </div>
                </li>
                <li>Score: {this.state.scoreTwo}</li>
                <li>{this.state.userTwo.login}</li>
                <li>
                  <span>
                    <i class="fas fa-user"></i>
                  </span>
                  <span>{this.state.userTwo.followers} Followers</span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-user"></i>
                  </span>
                  <span>{this.state.userTwo.following} Following</span>
                </li>
                <li>{this.state.userTwo.public_repos} repositories</li>
              </ul>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Battle;

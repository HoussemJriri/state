import logo from "./logo.svg";
import React from "react";
import "./App.css";
import image from "./ronaldo.jpg";

class App extends React.Component {
  state = {
    person: {
      fullName: "cristiano ronaldo",
      bio:
        "né le 5 février 1985 à Funchal sur l'île de Madère, est un footballeur international portugais qui évolue au poste d'attaquant à la Juventus de Turin.",
      imgSrc: image,
      profession: "football player",
    },
    show: true,
    time:0
  };

  changeShow = (x) => {
    this.setState({ show: !this.state.show });
  };
  setVisibility = () => {
    return this.state.show ? "visible" : "hidden";
  };
  componentDidMount=()=> {
    setInterval(
      ()=>this.setState({time:(this.state.time)+1}) , 1000
    )

  }
  render() {
    return (
      <div className="App">
        <div style={{ visibility: this.setVisibility() }}>
          <div>
            <img style={{ width: "30%" }} src={this.state.person.imgSrc} />
          </div>
          <div style={{ fontFamily: "calibri" }}>
            {this.state.person.fullName}
          </div>
          <div style={{ color: "red" }}>{this.state.person.bio}</div>

          <div>{this.state.person.profession}</div>
        </div>

        <button onClick={this.changeShow}>{this.state.show.toString()}</button>
        <div> {this.state.time}</div>
      </div>
      
      
    );
  }
}

export default App;

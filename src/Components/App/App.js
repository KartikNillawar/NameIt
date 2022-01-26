import React from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultContainer from "../ResultContainer/ResultContainer";

const name = require("@rstacruz/startup-name-generator");


class App extends React.Component {
  // state = {
  //   headertext: "NameIt",
  // };
  constructor() {
    super();
    this.state = {
      headertext: "NameIt",
      headerExpanded: true,
      suggestednames: [],
    };
  }

  handleInputChange = (InputText) => {
    this.setState({suggestednames: InputText?name(InputText):[]})
    this.setState({ headerExpanded: !(InputText.length > 0) });
  };

  render() {
    return (
      <>
        <Header
          headerExpanded={this.state.headerExpanded}
          headtitle={this.state.headertext}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultContainer suggestednames={this.state.suggestednames}/>
      </>
    );
  }
}

export default App;

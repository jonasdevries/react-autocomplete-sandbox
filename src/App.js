import React, { Component } from "react";
import Autocomplete from "./Autocomplete";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Autocomplete
          suggestions={[
            "Jonas Devries",
            "Simon Stevens",
            "Loïc Lemaître",
            "Erik Potemans",
            "Stef Van Oppens",
            "Patricia Lardaux"
          ]}
        />
      </div>
    );
  }
}

export default App;

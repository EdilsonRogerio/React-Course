import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubimt(term) {
        console.log(term);
    }
    render () {
        return (
            <div className="ui container" style={{marginTop: "50px"}}>
                <SearchBar onSubmit={this.onSearchSubimt} />
            </div>
        );
    }
}

export default App;
import React from "react";

class SearchBar extends React.Component {

    state = {
        input: "Search..."
    };

    onInputChange = (e) => {
        this.setState({
            input: e.target.value,
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Video</label>
                        <input
                            type="text"
                            value={this.state.input}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
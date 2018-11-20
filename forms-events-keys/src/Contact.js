import React, { Component } from 'react';

class Contact extends Component {

    state = {
        language: '',
        name: '',
        submits: []
    };

    handleLanguageChange = (event) => {
        this.setState({ language: event.target.value })
    };

    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleOnSubmit = (event) => {
        // alert(this.state.name + " you select " + this.state.language + " as your default programming language");
        const newElement = {
            name: this.state.name,
            lng: this.state.language
        }
        this.setState(prevState => {
            return {
                submits: prevState.submits.concat(newElement)
            }
        });
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Which programming langauge you prefer? </label>
                    <select value={this.state.language}
                        onChange={this.handleLanguageChange}>
                        <option value="javascript">JavaScript</option>
                        <option value="elm">Elm</option>
                        <option value="java">Java</option>
                        <option value="csharp">C#</option>
                        <option value="python">Python</option>
                        <option value="swift"> Swift</option>
                    </select>

                    <div style={{ marginTop: '20px' }}>
                        <label>Enter your name: </label>
                        <input type="text" onChange={this.handleNameChange} />
                    </div>

                    <input type="submit" value="Submit" />
                </form>

                <ul>
                    {this.state.submits.map( (element,index) =>
                        <li key={index}>{element.name} selected {element.lng} as his default language.</li>
                    )}
                </ul>
            </React.Fragment>
        );
    }
}

export default Contact
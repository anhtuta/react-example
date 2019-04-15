import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [
                {
                    name: 'Charlie',
                    job: 'Janitor',
                },
                {
                    name: 'Mac',
                    job: 'Bouncer',
                },
                {
                    name: 'Dee',
                    job: 'Aspring actress',
                },
                {
                    name: 'Dennis',
                    job: 'Bartender',
                },
            ]
        }
    }

    removeCharacter = index => {
        // Nếu dùng const {characters} = this.state; thì có thể làm dc ko? vì
        // hàm splice ko dùng dc với biến const
        let {characters} = this.state;
        characters.splice(index, 1);
        this.setState({
            characters: characters
        })
    }

    submitForm = data => {
        this.setState({
            characters: [...this.state.characters, data]
        })
    }

    render() {
        const {characters} = this.state;

        return (
            <div className="container">
                <Form submitForm={this.submitForm}/>
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        );
    }
}

export default App;

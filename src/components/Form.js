import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            job: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        if(this.state.name !== '' || this.state.job !== '') {
            this.props.submitForm(this.state);
            this.setState({
                name: '',
                job: ''
            });
        }
    }

    render() {
        const {name, job} = this.state;

        return (
            <form>
                <label>Name</label>
                <input type="text" name="name" value={name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input type="text" name="job" value={job}
                    onChange={this.handleChange} />
                <input type="submit" value="Add" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;
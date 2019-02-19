import React from 'react';
import { Form } from './style';
import { Prompt } from 'react-router-dom';

class ContactPage extends React.Component {
    state = {
        value: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: ''
        })
    }
    handleChangeValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <h2>Send message</h2>
                    <textarea value={this.state.value} onChange={this.handleChangeValue} cols="30" rows="10" placeholder="Your message..">
                    </textarea>
                    <button>Send</button>
                    <Prompt
                        when={this.state.value !== ''}
                        message='Are you sure to leave this page?'
                    />
                </Form>
            </>
        );
    }
}

export default ContactPage;
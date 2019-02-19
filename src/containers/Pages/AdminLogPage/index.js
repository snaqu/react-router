import React from 'react';
import { LabelContainer } from './style';
import { Form } from '../ContactPage/style';
const AdminLogPage = () => {
    return (
        <>
            <Form>
                <LabelContainer>
                    Login:
                <input type="text" />
                </LabelContainer>
                <LabelContainer>
                    Password:
                <input type="password" />
                </LabelContainer>
                <button>Log In</button>
            </Form>
        </>
    );
}

export default AdminLogPage;
import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    textarea{
        width: 600px;
        resize: none;
        border: 1px solid #0f0f0f;
        padding: 15px;
        font-size: 1.3rem;
    }

    button{
        width: 150px;
        height: 45px;
        margin-top:30px;
        border: 1px solid #0f0f0f;
        background-color: transparent;
        font-size: 1.3rem;
        cursor: pointer;
        transition: cubic-bezier(0.19, 1, 0.22, 1) .4s;
        &:hover{
            background-color: #0f0f0f;
            color: red;
        }
    }
`;
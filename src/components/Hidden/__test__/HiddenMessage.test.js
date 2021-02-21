import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {HiddenMessage} from '../HiddenMessage';

jest.mock('react-transition-group', () => {
    return {
        CSSTransition: props => (props.in ? props.children : null),
    }
})

test("show hidden message when toggle is clicked", async () => {
    const myMessage = 'hello world'
    const {getByText, queryByText} = render(<HiddenMessage>{myMessage}</HiddenMessage>);
    const toggleBtn = getByText(/toggle/i);
    expect(queryByText(myMessage)).not.toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(getByText(myMessage)).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(queryByText(myMessage)).not.toBeInTheDocument();
})
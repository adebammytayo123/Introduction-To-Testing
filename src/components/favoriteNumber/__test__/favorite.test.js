import React from 'react';
import user from '@testing-library/user-event';
import {render} from "@testing-library/react"
import FavoriteNumber from '../FavoriteNumber';

test("renders a number with a label 'favorite number'", ()=> {
    const {getByLabelText} = render(<FavoriteNumber />);
    const input = getByLabelText(/favorite number/i);
    expect(input).toHaveAttribute('type','number');
})

test("entering an invalid number shows an error message", ()=> {
    const {getByLabelText, getByRole, queryByRole, rerender} = render(<FavoriteNumber />);
    const input = getByLabelText(/favorite number/i) ;
    user.type(input, '10');
    expect(getByRole('alert')).toHaveTextContent(/The number is invalid/i);
    rerender(<FavoriteNumber max={10} />);
    expect(queryByRole('alert')).toBeNull();
})
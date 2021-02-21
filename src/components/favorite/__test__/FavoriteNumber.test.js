import React from "react";
import user from '@testing-library/user-event'; 
import { render } from "@testing-library/react";
import FavoriteNumber from "./../FavoriteNumber";

test('renders a number input with a label "Favorite Number"', () => {
  const { getByLabelText} = render(<FavoriteNumber />);
  const input = getByLabelText(/favorite number/i);
  expect(input).toHaveAttribute("type", "number");
});

test('entering an invalid value shows an error message', ()=> {
    const {getByLabelText, getByRole, rerender, queryByRole} = render(<FavoriteNumber/>)
   const input = getByLabelText(/Favorite Number/i)
   user.type(input, '10')
//    fireEvent.change(input, {target: {value: '10'}})
   expect(getByRole('alert')).toHaveTextContent(/The number is invalid/i)
   rerender(<FavoriteNumber max={10}/>)
   expect(queryByRole('alert')).toBeNull()
})

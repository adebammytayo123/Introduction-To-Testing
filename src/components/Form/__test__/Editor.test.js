import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Editor} from '../Editor';


test("renders a form with title,content, tags, and a submit button", () => {
    const {getByLabelText, getByText} = render(<Editor/>);
    getByLabelText(/title/i)
    getByLabelText(/content/i)
    getByLabelText(/tags/i)
   const submitBtn = getByText(/submit/i);
   fireEvent.click(submitBtn)
   expect(submitBtn).toBeDisabled()
})
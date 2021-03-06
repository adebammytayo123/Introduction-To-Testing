import 'jest-axe/extend-expect'
import React from 'react';
import {render} from '@testing-library/react';
import {axe} from 'jest-axe'
import Form from '../Form';


 
test('the form is assessible', async () => {
    const {container} = render(<Form />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
});


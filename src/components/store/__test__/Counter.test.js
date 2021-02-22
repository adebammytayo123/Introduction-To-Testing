import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react';
import {ReduxCounter} from "../ReduxCounter";
import {store as appStore} from '../ReduxStore';
import {reducer} from '../reduxReducer';

test("can render with redux with default", () => {
    const {getByLabelText, getByText} = render(
        <Provider store={appStore}>
            <ReduxCounter />
        </Provider>
    )
    fireEvent.click(getByText('+'));
    expect(getByLabelText(/count/i)).toHaveTextContent('1');
})

test("can render with redux custom inital state", () => {
    const store = createStore(reducer, {count: 3})
    const {getByLabelText, getByText} = render(
        <Provider store={store}>
            <ReduxCounter />
        </Provider>
    )
    fireEvent.click(getByText('-'));
    expect(getByLabelText(/count/i)).toHaveTextContent('2');
})
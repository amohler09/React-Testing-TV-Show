import React from 'react'
import { render, fireEvent, getByText, debug } from '@testing-library/react'
import { fetchShow as mockFetchShow} from './api'
import userEvent from "@testing-library/user-event";


test('it renders an image with a dropdown bar with season selections', () => {

    
    userEvent.click(getByText(/select a season/i));
    getByText(/season 1/i);

})


import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
import { unmountComponentAtNode } from 'react-dom';

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('<App />', () => {
    test('renders header', () => {
        act(() => {
            render(<App />, container);
        });

        const headerElement = screen.getByText('PerfAnalytics');
        expect(headerElement).toBeInTheDocument();
    });
});

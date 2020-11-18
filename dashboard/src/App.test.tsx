import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

let container: RenderResult;
describe('<App />', () => {
    test('renders header', () => {
        act(() => {
            render(<App />, container);
        });

        const headerElement = screen.getByText('PerfAnalytics');
        expect(headerElement).toBeInTheDocument();
    });
});

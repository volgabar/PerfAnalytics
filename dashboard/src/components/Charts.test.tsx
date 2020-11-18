import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Charts from './Charts';

let container: RenderResult;
describe('<Charts />', () => {
    test('should render all charts', () => {
        act(() => {
            render(<Charts />, container);
        });
        const ttfb = container.getByText('TTFB');
        const fcp = container.getByText('FCP');
        const windowLoad = container.getByText('Window Load');
        const domLoad = container.getByText('DOM Load');

        expect(ttfb).toBeInTheDocument();
        expect(fcp).toBeInTheDocument();
        expect(windowLoad).toBeInTheDocument();
        expect(domLoad).toBeInTheDocument();
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Charts from './Charts';
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

describe('<Charts />', () => {
    test('should render all charts', async () => {
        const fakeMetrics = {
            ttfb: [
                { y: 5, x: '2020-11-18T23:10:27.623Z' },
                { y: 2, x: '2020-11-18T23:10:55.255Z' },
            ],
            fcp: [
                { y: 6, x: '2020-11-18T23:10:27.623Z' },
                { y: 1, x: '2020-11-18T23:10:55.255Z' },
            ],
            domLoad: [
                { y: 3, x: '2020-11-18T23:10:27.623Z' },
                { y: 4, x: '2020-11-18T23:10:55.255Z' },
            ],
            windowLoad: [
                { y: 2, x: '2020-11-18T23:10:27.623Z' },
                { y: 6, x: '2020-11-18T23:10:55.255Z' },
            ],
        };

        jest.spyOn(global, 'fetch').mockImplementation((): any =>
            Promise.resolve({
                json: () => Promise.resolve(fakeMetrics),
            }),
        );

        await act(async () => {
            render(<Charts />, container);
        });

        const chartsClass = container.getElementsByClassName('Chart');

        expect(chartsClass).toBeDefined();
    });
});

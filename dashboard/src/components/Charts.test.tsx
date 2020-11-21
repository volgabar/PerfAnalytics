import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Charts from './Charts';
import { getPerfMetrics } from '../services/api_call';
import { mocked } from 'ts-jest/utils';

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

afterEach(() => {
    cleanup;
    jest.resetAllMocks();
});

jest.mock('../services/api_call');
const mockedAxios = mocked(getPerfMetrics);

test('Renders chart container correctly', async () => {
    await act(async () => {
        const { getByTestId } = render(<Charts />);
        expect(getByTestId('spinner')).toBeInTheDocument();
    });
});

test('Should render all charts', async () => {
    mockedAxios.mockImplementationOnce(() => Promise.resolve(fakeMetrics));

    await act(async () => {
        const { getByTestId } = render(<Charts />);

        await waitFor(() => {
            expect(getByTestId('chartContainer')).toBeInTheDocument();
            expect(getByTestId('ttfbChart')).toBeInTheDocument();
            expect(getByTestId('fcpChart')).toBeInTheDocument();
            expect(getByTestId('domLoadChart')).toBeInTheDocument();
            expect(getByTestId('windowLoadChart')).toBeInTheDocument();
        });
    });
});

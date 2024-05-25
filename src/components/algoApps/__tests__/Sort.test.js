import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

import SortScreen from '../sortApp/SortScreen';
import store from '../../../store';

jest.mock('react-syntax-highlighter/dist/esm/styles/hljs/index.js', () => ({
  atomOneDark: '',
}));

it('should run sorting component with bars', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <SortScreen />
      </MemoryRouter>
    </Provider>
  );

  const playBtn = screen.getByRole('button', { name: 'PLAY' });
  const sortInput = screen.getByTestId('sortInput');

  fireEvent.change(sortInput, { target: { value: '34 63 24 74 41' } });
  fireEvent.click(playBtn);

  const bars = screen.getAllByTestId('sortBar');
  expect(bars.length).toBe(5);
});

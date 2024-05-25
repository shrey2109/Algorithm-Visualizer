import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

import StackScreen from '../stackApp/StackScreen';
import store from '../../../store';

jest.mock('react-syntax-highlighter/dist/esm/styles/hljs/index.js', () => ({
  atomOneDark: '',
  paraisoLight: '',
}));

it('should run stack component with box', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <StackScreen />
      </MemoryRouter>
    </Provider>
  );

  const pushBtn = screen.getByRole('button', { name: 'PUSH' });
  const popBtn = screen.getByRole('button', { name: 'POP' });
  const popAllBtn = screen.getByRole('button', { name: 'POP ALL' });
  const stackInput = screen.getByTestId('stackInput');

  fireEvent.change(stackInput, { target: { value: '7' } });
  fireEvent.click(pushBtn);
  fireEvent.change(stackInput, { target: { value: '10' } });
  fireEvent.click(pushBtn);
  fireEvent.change(stackInput, { target: { value: '18' } });
  fireEvent.click(pushBtn);

  const pushBox = screen.getAllByTestId('stackBox');
  expect(pushBox.length).toBe(3);

  fireEvent.click(popBtn);
  const popBox = screen.getAllByTestId('stackBox');
  expect(popBox.length).toBe(2);

  fireEvent.click(popAllBtn);
  const popAllBox = screen.queryAllByTestId('stackBox');
  expect(popAllBox).toHaveLength(0);
});

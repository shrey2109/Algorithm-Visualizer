import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

import QueueScreen from '../queueApp/QueueScreen';
import store from '../../../store';

jest.mock('react-syntax-highlighter/dist/esm/styles/hljs/index.js', () => ({
  atomOneDark: '',
  paraisoLight: '',
}));

it('should run queue component with box', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <QueueScreen />
      </MemoryRouter>
    </Provider>
  );

  const pushBtn = screen.getByRole('button', { name: 'PUSH' });
  const popBtn = screen.getByRole('button', { name: 'POP' });
  const popAllBtn = screen.getByRole('button', { name: 'POP ALL' });
  const queueInput = screen.getByTestId('queueInput');

  fireEvent.change(queueInput, { target: { value: '7' } });
  fireEvent.click(pushBtn);
  fireEvent.change(queueInput, { target: { value: '10' } });
  fireEvent.click(pushBtn);
  fireEvent.change(queueInput, { target: { value: '18' } });
  fireEvent.click(pushBtn);

  const pushBox = screen.getAllByTestId('queueBox');
  expect(pushBox.length).toBe(3);

  fireEvent.click(popBtn);
  const popBox = screen.getAllByTestId('queueBox');
  expect(popBox.length).toBe(2);

  fireEvent.click(popAllBtn);
  const popAllBox = screen.queryAllByTestId('queueBox');
  expect(popAllBox).toHaveLength(0);
});

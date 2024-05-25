import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

import SearchScreen from '../searchApp/SearchScreen';
import store from '../../../store';

jest.mock('react-syntax-highlighter/dist/esm/styles/hljs/index.js', () => ({
  atomOneDark: '',
}));

it('should run searching component with bars', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <SearchScreen />
      </MemoryRouter>
    </Provider>
  );

  const playBtn = screen.getByRole('button', { name: 'PLAY' });
  const searchInput = screen.getByTestId('searchInput');

  fireEvent.change(searchInput, { target: { value: '57 34 89 35 78' } });
  fireEvent.click(playBtn);

  const goals = screen.getAllByTestId('searchGoal');
  expect(goals.length).toBe(5);
});

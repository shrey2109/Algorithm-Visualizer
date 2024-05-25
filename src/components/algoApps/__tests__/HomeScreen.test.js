import { MemoryRouter } from 'react-router-dom'; // used this for useNavigate error
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../../../store';
import HomeScreen from '../HomeScreen';

// either use MemoryRouter for error or mock useNavigate via below code
// below code will mock useNavigate -> use this if we want to check actual functionality of useNavigate in test - like during test we want to redirect to another page or something like that - can explore more
// as we are not using useNavigate functionality we can simply use MemoryRouter

/*
    const mockedUsedNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockedUsedNavigate,
    }));
*/

it('should load home screen component', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <HomeScreen />
      </MemoryRouter>
    </Provider>
  );
  const title = screen.getByText('ALGO CANVAS');

  expect(title).toBeInTheDocument();
});

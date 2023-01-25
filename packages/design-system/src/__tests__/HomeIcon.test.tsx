import { cleanup, render, screen, sha } from '@testing-library/react-native';

import { Header } from '..';

afterEach(cleanup);

it('renders a wave emoji', () => {
  render(<Header>Hello</Header>);
  expect(screen.getByText('Hello')).toBeTruthy();
});

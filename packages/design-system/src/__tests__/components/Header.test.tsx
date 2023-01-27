import { cleanup, render, screen } from '@testing-library/react-native';

import { Header } from '../..';

afterEach(cleanup);

it('renders the header component ', async () => {
  const title = 'Hello Main Title';
  render(<Header>{title}</Header>);
  await screen.findByTestId('header_text');
  expect(screen.getByText(title)).toBeTruthy();
  expect(screen.toJSON()).toMatchSnapshot();
});

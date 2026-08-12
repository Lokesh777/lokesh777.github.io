import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Github calendar / remote badges can be flaky in CI; keep app smoke light.
jest.mock('./components/Github', () => () => <div data-testid="github-stub" />);

test('renders portfolio shell with home hero', () => {
  render(
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  );

  expect(
    screen.getByRole('heading', { name: /Lokesh Kumar Bairwa/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  expect(screen.getByTestId('github-stub')).toBeInTheDocument();
});

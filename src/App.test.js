import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

jest.mock('./Router/About', () => () => <div data-testid="about-stub">About Me</div>);
jest.mock('./components/SkillSection', () => ({
  SkillsSection: () => <div data-testid="skills-stub" />,
}));
jest.mock('./Router/projectCard', () => ({
  ProjectsSection: () => <div data-testid="projects-stub" />,
}));
jest.mock('./components/Github', () => () => <div data-testid="github-stub" />);
jest.mock('./Router/contact', () => () => <div data-testid="contact-stub" />);

test('renders portfolio shell with home hero', async () => {
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

  expect(await screen.findByTestId('about-stub')).toBeInTheDocument();
  expect(await screen.findByTestId('github-stub')).toBeInTheDocument();
});

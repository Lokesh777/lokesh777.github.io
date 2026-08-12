import { render, screen, act } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './HomePage';

function renderHome() {
  return render(
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

async function waitForRoleText(matcher, maxSteps = 500) {
  for (let i = 0; i < maxSteps; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await act(async () => {
      jest.advanceTimersByTime(50);
    });
    const el = document.querySelector('.hero-role-text');
    if (el && matcher.test(el.textContent || '')) {
      return el.textContent;
    }
  }
  throw new Error(`Timed out waiting for role matching ${matcher}`);
}

describe('Home page hero', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(async () => {
    await act(async () => {
      jest.clearAllTimers();
    });
    jest.useRealTimers();
  });

  test('shows greeting, name, tagline, and CTAs', () => {
    renderHome();

    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Lokesh Kumar Bairwa/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Building clean, high-performance web experiences/i)
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /CONTACT ME/i })).toHaveAttribute(
      'href',
      '#contact'
    );
    expect(screen.getByRole('link', { name: /VIEW MY WORK/i })).toHaveAttribute(
      'href',
      '#projects'
    );
  });

  test('types the first role into the hero', async () => {
    renderHome();
    await waitForRoleText(/Full Stack Developer \(MERN\)/);
    expect(
      screen.getByText(/Full Stack Developer \(MERN\)/i)
    ).toBeInTheDocument();
  });

  test('cycles to the next role after pause and delete', async () => {
    renderHome();
    await waitForRoleText(/Full Stack Developer \(MERN\)/);
    await waitForRoleText(/^Frontend Developer$/);
    expect(screen.getByText(/^Frontend Developer$/)).toBeInTheDocument();
  });
});

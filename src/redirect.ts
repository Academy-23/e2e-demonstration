/**
 * Home page redirect: sends visitors from "/" to the theme folder
 * that matches their OS colour-scheme preference.
 */

type Theme = 'light' | 'dark';

const DEFAULT_THEME: Theme = 'light';

function preferredTheme(): Theme {
  if (typeof window.matchMedia !== 'function') {
    return DEFAULT_THEME;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function redirectToTheme(theme: Theme = preferredTheme()): void {
  const { search, hash } = window.location;
  // replace() keeps the redirect page out of the back-button history.
  window.location.replace(`${theme}/${search}${hash}`);
}

redirectToTheme();

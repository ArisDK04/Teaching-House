import { ActionsUI } from './vanilla';

export function setTheme(theme) {
  return (dispatch) => {
    dispatch(ActionsUI.setTheme(theme));
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}

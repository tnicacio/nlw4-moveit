import { ChangeEvent } from 'react';
import styles from '../styles/components/ColorModeSelector.module.css';

export function ColorModeSelector() {
  function changeColors(event: ChangeEvent<HTMLInputElement>) {
    const colorModes = {
      light: {
        '--white': '#fff',
        '--background': '#f2f3f5',
        '--text': '##666666',
        '--title': '#2e384d',
        '--blue': '#5965e0',
        '--blue-dark': '#4953b8',
        '--red': '#e83f5b',
      },
      dark: {
        '--white': '#282a36',
        '--background': '#000000',
        '--text': '#FCFCFC',
        '--title': '#FCFCFC',
        '--blue': '#4cd62b',
        '--blue-dark': '#50fa7b',
        '--red': '#ff5555',
      },
    };

    const colorMode = event.currentTarget.checked ? 'dark' : 'light';
    const rootStyle = document.querySelector<HTMLElement>(':root').style;

    for (const property in colorModes[colorMode]) {
      rootStyle.setProperty(property, colorModes[colorMode][property]);
    }
  }

  return (
    <input
      type="checkbox"
      className={styles.colorCheckBox}
      onChange={changeColors}
    />
  );
}

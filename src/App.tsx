import './App.css'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();
  const [currentCharacter, setCurrentCharacter] = useState(getRandomCharacter());

  function getRandomCharacter() {
    const keys = ['A', 'I', 'U', 'E', 'O', 'KA', 'KI', 'KU', 'KE', 'KO', 'SA', 'SHI', 'SU', 'SE', 'SO', 'TA', 'CHI', 'TSU', 'TE', 'TO', 'NA', 'NI', 'NU', 'NE', 'NO', 'HA', 'HI', 'FU', 'HE', 'HO'];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return t(randomKey);
  }

  function handleNext() {
    setCurrentCharacter(getRandomCharacter());
  }

  return (
    <>
      <h1>Japonês hiragana</h1>
      <LanguageSwitcher />
      <h1>{currentCharacter}</h1>
      <button onClick={handleNext}>Próximo</button>
    </>
  )
}

export default App;

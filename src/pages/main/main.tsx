import React, { useState } from 'react';

import { Character, fetchCharactersByHouse } from 'src/api';
import { CharacterList } from 'src/features';
import { Button, Select } from 'src/shared/components';
import { HOGWARTS_HOUSES, HOGWARTS_HOUSE_OPTIONS } from 'src/shared/constants';

import styles from './styles.module.scss';

const MainPage: React.FC = () => {
  const [house, setHouse] = useState(HOGWARTS_HOUSES.gryffindor);
  const [characters, setCharacters] = useState<Character[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setHouse(e.target.value as any);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetchCharactersByHouse(house).then(({ data }) => {
      setCharacters(data);
    });
  }

  return (
    <main className={styles.main}>
      <h1>Персонажи из Гарри Поттера</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Select value={house} onChange={handleChange} options={HOGWARTS_HOUSE_OPTIONS} />
        <Button type="submit">Показать</Button>
      </form>

      <div className={styles.list}>
        <CharacterList characters={characters} />
      </div>
    </main>
  );
};

export default MainPage;

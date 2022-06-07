import CharacterItem from './character-item';
import styles from './styles.module.scss';
import { CharacterListProps } from './types';

const CharacterList: React.FC<CharacterListProps> = (props) => {
  const { characters } = props;

  return (
    <div className={styles.list}>
      {characters.map((character, idx) => (
        <CharacterItem character={character} key={character.name + idx} />
      ))}
    </div>
  );
};

export default CharacterList;

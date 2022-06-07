import styles from './styles.module.scss';
import { CharacterItemProps } from './types';

const CharacterItem: React.FC<CharacterItemProps> = (props) => {
  const { character } = props;

  return (
    <div className={styles.greeting}>
      <img alt={character.name} src={character.image} width={200} height={200} className={styles.image} />
      <p className={styles.name}>{character.name}</p>
    </div>
  );
};

export default CharacterItem;

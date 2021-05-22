import { FC } from 'react';

import styles from './Preview.module.scss';

// TODO: Delete this before development
const Preview: FC = () => {
  return (
    <div className={styles.test}>
      <h1>
        <a href="https://sibdev.pro" rel="noopener noreferrer" target="_blank">
          Sibdev
        </a>
      </h1>
      <h2>React-Typescript boilerplate</h2>
    </div>
  );
};

export default Preview;

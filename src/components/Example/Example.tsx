// TODO: Удалить перед началом разработки проекта

import { FC } from 'react';

import styles from './Example.module.scss';

const Example: FC = () => {
  return (
    <div className={styles.example}>
      <h1>
        <a href="https://sibdev.pro" rel="noopener noreferrer" target="_blank">
          Sibdev
        </a>
      </h1>
      <h2>React-Typescript boilerplate</h2>

      <div className={styles.block}>
        <p>Перед началом разаработки проекта удалите следующие папки:</p>

        <ul>
          <li>src/components/Example</li>
          <li>src/views/Example</li>
          <li>src/services/exampleServices</li>
        </ul>

        <p>Они служат в качестве примера структурирования React-приложения</p>
      </div>
    </div>
  );
};

export default Example;

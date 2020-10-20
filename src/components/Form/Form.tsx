import React, { useState } from 'react';

import styles from './Form.module.scss';

export interface IForm {
  title: string;
  body: string;
}

interface IProps {
  onSubmit: (body: IForm) => void;
}

const Form: React.FC<IProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, body });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input name="title" type="text" onChange={onChangeTitle} required />
      <textarea name="body" onChange={onChangeBody} required />
      <button type="submit">Асинхронное создание поста</button>
    </form>
  );
};

export default Form;

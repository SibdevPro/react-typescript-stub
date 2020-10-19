import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { IDataResponse } from 'services/exampleService/types';
import { setSimpleData } from 'store/simple/actions';
import { getSimpleFirstState, getSimpleSecondState } from 'store/simple/getters';
import useApi from 'services/hook/useApi';
import Form from 'components/Form';
import { IForm } from 'components/Form/Form';
import { Paths } from 'router/constants';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const first = useSelector(getSimpleFirstState);
  const second = useSelector(getSimpleSecondState);
  const dispatch = useDispatch();

  const [post, getPost] = useApi<IDataResponse>({
    method: 'GET',
    url: '/posts/',
  });

  const [createdPost, createPost] = useApi<IDataResponse, IForm>({
    method: 'POST',
    url: '/posts/',
  });

  useEffect(() => getPost({}, '1'), [getPost]);

  useEffect(() => {
    dispatch(
      setSimpleData({
        exampleFirst: 'Hello, ',
        exampleSecond: 'welcome to The React TS Boilerplate!',
      })
    );
  }, [dispatch]);

  const onSubmit = (body: IForm) => createPost(body);

  return (
    <div>
      <header className={styles.header}>
        <Link to={Paths.home}>Home</Link>
        <Link to={Paths.about}>About</Link>
        <Link to={Paths.topics}>Topics</Link>
      </header>

      <h1 className={styles.title}>{`${first} ${second}`}</h1>

      <div className={styles.content}>
        <Form onSubmit={onSubmit} />

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p>title: {post.response?.title}</p>
            <p>body: {post.response?.body}</p>
          </li>
          <li className={styles.listItem}>
            <p>title: {createdPost.response?.title}</p>
            <p>body: {createdPost.response?.body}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

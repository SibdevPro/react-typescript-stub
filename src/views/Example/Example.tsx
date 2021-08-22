// TODO: Удалить перед началом разработки проекта

import { useEffect } from 'react';
import { FC } from 'react';

import { Example as ExampleComponent } from 'src/components';
import { getExampleData } from 'src/services';

const Example: FC = () => {
  useEffect(() => {
    const fetchExampleData = async () => {
      const res = await getExampleData();
      console.log(res); // eslint-disable-line no-console
    };

    fetchExampleData();
  }, []);

  return <ExampleComponent />;
};

export default Example;

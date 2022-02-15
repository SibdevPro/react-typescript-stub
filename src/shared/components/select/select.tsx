import clsx from 'clsx';

import styles from './styles.module.scss';
import { SelectProps } from './types';

const Select: React.VFC<SelectProps> = (props) => {
  const { options, className, ...rest } = props;

  return (
    <select className={clsx(styles.select, className)} {...rest}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;

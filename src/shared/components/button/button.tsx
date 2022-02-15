import clsx from 'clsx';

import styles from './styles.module.scss';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, type = 'button', ...rest } = props;

  return (
    <button className={clsx(styles.button, className)} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;

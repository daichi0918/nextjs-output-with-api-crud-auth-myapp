/**
 * Button
 *
 * @package atoms
 */
import { memo } from 'react';
import styles from './styles.module.css';
interface ButtonProps {
  buttonName: string;
}

/**sty
 * @param {} props
 * @returns {JSX.Element}
 */
export const Button = memo((props: ButtonProps) => {
  const { buttonName } = props;
  return (
    <button className={styles.button} type={'submit'}>
      {buttonName}
    </button>
  );
});

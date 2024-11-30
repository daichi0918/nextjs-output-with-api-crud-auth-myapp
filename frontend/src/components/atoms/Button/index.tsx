/**
 * Button
 *
 * @package atoms
 */
import { memo } from 'react';
import styles from './styles.module.css';
interface ButtonProps {
  buttonName: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**sty
 * @param {} props
 * @returns {JSX.Element}
 */
export const Button = memo((props: ButtonProps) => {
  const { buttonName, onClick } = props;
  return (
    <button className={styles.button} onClick={onClick} type={'submit'}>
      {buttonName}
    </button>
  );
});

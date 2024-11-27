/**
 * InputForm
 *
 * @package atoms
 */
import { memo } from 'react';
import styles from './styles.module.css';
type Props = JSX.IntrinsicElements['input'];

/**
 * @param {InputFormProps} props
 * @returns {JSX.Element}
 */
const InputForm = memo((props: Props) => {
  const { placeholder = '', value, onChange, readOnly = false } = props;
  return (
    <input
      type={'text'}
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
});

export default InputForm;

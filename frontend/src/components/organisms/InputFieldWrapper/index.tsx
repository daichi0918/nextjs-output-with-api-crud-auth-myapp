/**
 * InputFieldWrapperProps
 *
 * @package organisms
 */
import React, { memo } from 'react';
import styles from './styles.module.css';

interface InputFieldWrapperProps {
  children: React.ReactNode;
}

/**
 * @param {LinkPInputWrapperPropsrops} props
 * @returns {JSX.Element}
 */
const InputFieldWrapper = memo(({ children }: InputFieldWrapperProps) => {
  return <section className={styles.area}>{children}</section>;
});

export default InputFieldWrapper;

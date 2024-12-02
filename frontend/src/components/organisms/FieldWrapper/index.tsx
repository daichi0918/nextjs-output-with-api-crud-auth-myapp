/**
 * FieldWrapperProps
 *
 * @package organisms
 */
import React, { memo } from 'react';
import styles from './styles.module.css';

interface FieldWrapperProps {
  children: React.ReactNode;
}

/**
 * @param {LinkPInputWrapperPropsrops} props
 * @returns {JSX.Element}
 */
const FieldWrapper = memo(({ children }: FieldWrapperProps) => {
  return <section className={styles.area}>{children}</section>;
});

export default FieldWrapper;

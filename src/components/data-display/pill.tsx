import { BaseComponentProps } from '@/models';
import styles from '@/styles/data-display.module.css';

export function Pill({ children, className, style }: BaseComponentProps) {
  return (
    <div className={`${styles.pill} ${className}`} style={style}>
      {children}
    </div>
  );
}

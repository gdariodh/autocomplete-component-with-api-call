import { OptionItemProps } from '@/components/autocomplete-input.tsx';
import styles from '../styles/listbox.module.css';
import { UserIcon } from '@/components';

export function OptionItem({ item, isActive }: OptionItemProps) {
  const image = item?.image;

  return (
    <div
      className={`${styles.optionItem} ${
        isActive && `${styles.optionItemActive}`
      }`}
    >
      {image ? (
        <img
          alt={item.label}
          className={styles.optionItemImage}
          height={image.height}
          src={image.url}
          title={item.label}
          width={image.width}
        />
      ) : (
        <div className={styles.optionItemImage}>
          <UserIcon />
        </div>
      )}
      <div>{item.label}</div>
    </div>
  );
}

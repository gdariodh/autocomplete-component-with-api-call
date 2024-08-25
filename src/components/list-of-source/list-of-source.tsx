import { CardArtist } from '@/components';
import { AutoCompleteHandler } from '@/components/autocomplete-input.tsx';
import styles from './styles/list-of-source.module.css';

export function ListOfSource({
  options,
  selectedIndex,
  bindOption,
  bindOptions,
}: AutoCompleteHandler) {
  if (options.length === 0) return;

  return (
    <ul {...bindOptions} className={styles.listbox}>
      {options.map((option, index) => {
        const isActive = selectedIndex === index;

        const classNameWrapper = `${isActive ? styles.optionItemActive : ''}`;

        return (
          <li key={option.value} {...bindOption} {...bindOption}>
            <CardArtist
              artist={{
                ...option,
                name: option.label,
              }}
              className={classNameWrapper}
            />
          </li>
        );
      })}
    </ul>
  );
}

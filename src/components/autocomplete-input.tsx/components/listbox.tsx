import { BindOption, BindOptions, Option } from '../models/autocomplete.model';
import styles from '../styles/listbox.module.css';
import { OptionItem } from './option-item';

interface ListBoxProps {
  options: Option[];
  selectedIndex: number;
  bindOption: BindOption;
  bindOptions: BindOptions;
}

export function ListBox({
  options,
  selectedIndex,
  bindOption,
  bindOptions,
}: ListBoxProps) {
  return (
    <ul className={styles.listbox} role="listbox" {...bindOptions}>
      {options.map((_, index) => {
        const isActive = selectedIndex === index;
        const item = options[index];

        return (
          <li key={index} role="option" {...bindOption}>
            <OptionItem item={item} isActive={isActive} />
          </li>
        );
      })}
    </ul>
  );
}

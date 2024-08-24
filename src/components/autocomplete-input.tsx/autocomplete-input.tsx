import { Options } from './mocks/autocomplete.mock';
import { AutoCompleteInputProps } from './models/autocomplete.model';
import useAutoComplete from './hooks/use-autocomplete';
import styles from './styles/autocomplete.module.css';
import { SearchIcon } from '@/components';
import { ListBox } from './components/listbox';

const defaultSource = async (search: string) =>
  Options.filter((option) => new RegExp(`^${search}`, 'i').test(option.label));

export function AutoCompleteInput({
  placeholder,
  delay,
  source,
  handleSelection,
}: AutoCompleteInputProps) {
  const {
    bindInput,
    bindOptions,
    bindOption,
    isBusy,
    suggestions,
    selectedIndex,
  } = useAutoComplete({
    delay,
    source: source || defaultSource,
    onChange: (value) => {
      if (handleSelection) {
        handleSelection(value.value);
      }
    },
  });

  return (
    <div className={styles.autoCompleteContainer}>
      <div className={styles.searchInputWrapper}>
        <div className={styles.prefixInputWrapper}>
          <SearchIcon />
        </div>
        <input
          aria-autocomplete="list"
          aria-controls="autocomplete-list"
          className={styles.searchInput}
          placeholder={placeholder || 'Type to search...'}
          {...bindInput}
        />

        <div className={styles.suffixInputWrapper}>
          {isBusy && <div className={styles.spinner}></div>}
        </div>
      </div>

      {suggestions.length > 0 && (
        <ListBox
          options={suggestions}
          selectedIndex={selectedIndex}
          bindOption={{ ...bindOption }}
          bindOptions={{ ...bindOptions }}
        />
      )}
    </div>
  );
}

import styles from './styles/autocomplete.module.css';
import {
  useAutoComplete,
  Options,
  AutoCompleteInputProps,
  ListBox,
} from '@/components/autocomplete-input.tsx';
import { SearchIcon } from '@/components';

const defaultSource = async (search: string) =>
  Options.filter((option) => new RegExp(`^${search}`, 'i').test(option.label));

export function AutoCompleteInput({
  placeholder,
  delay,
  source,
  className,
  children,
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

  const showSuggestions = suggestions.length > 0;

  return (
    <>
      <div className={`${styles.autoCompleteContainer} ${className}`}>
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

        {!children && (
          <>
            {showSuggestions && (
              <ListBox
                options={suggestions}
                selectedIndex={selectedIndex}
                bindOption={{ ...bindOption }}
                bindOptions={{ ...bindOptions }}
              />
            )}
          </>
        )}
      </div>

      {children && (
        <>
          {showSuggestions &&
            children({
              options: suggestions,
              selectedIndex,
              bindOption: { ...bindOption },
              bindOptions: { ...bindOptions },
            })}
        </>
      )}
    </>
  );
}

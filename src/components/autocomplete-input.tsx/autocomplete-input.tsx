import { Options } from './mocks/autocomplete.mock';
import { AutoCompleteInputProps } from './models/autocomplete.model';
import useAutoComplete from './hooks/use-autocomplete';
import './styles/autocomplete.styles.css';
import SearchIcon from '@/assets/icons/search.icon.svg';
import SuggestionItem from './suggestion-item';

const defaultSource = async (search: string) =>
  Options.filter((option) => new RegExp(`^${search}`, 'i').test(option.label));

export function AutoCompleteInput({
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
    delay: 1000,
    source: source || defaultSource,
    onChange: (value) => {
      if (handleSelection) {
        handleSelection(value.value);
      }
    },
  });

  return (
    <div className="input-container">
      <div className="bar-search">
        <img
          src={SearchIcon}
          className="search-icon"
          alt="search icon"
          title="search icon"
          height={16}
          width={16}
        />
        <input
          aria-autocomplete="list"
          aria-controls="autocomplete-list"
          className="input-search"
          placeholder="Type to search..."
          {...bindInput}
        />
        {isBusy && <div className="spinner"></div>}
      </div>
      <ul className="listbox" role="listbox" {...bindOptions}>
        {suggestions.map((_, index) => {
          const isActive = selectedIndex === index;
          const item = suggestions[index];

          return (
            <li
              key={index}
              role="option"
              className={'option ' + (isActive && 'option-is-selected')}
              {...bindOption}
            >
              <SuggestionItem item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

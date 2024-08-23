export interface Image {
  alt: string;
  height: number;
  url: string;
  width: number;
}

export interface Option {
  label: string;
  value: any;
  image?: Image;
}

export interface AutoCompleteInputProps {
  source: (search: string) => Promise<Option[]>;
  handleSelection: (value: any) => void;
}

export interface SuggestionItemProps {
  item: Option;
}

export interface UseAutoCompleteProps {
  delay?: number;
  source: (searchTerm: string) => Promise<Option[]>;
  onChange: (selectedOption: Option) => void;
}

export interface UseAutoCompleteReturn {
  bindOption: BindOption;
  bindInput: BindInput;
  bindOptions: BindOptions;
  isBusy: boolean;
  suggestions: Option[];
  selectedIndex: number;
}

interface BindOptions {
  ref: React.RefObject<HTMLUListElement>;
}

interface BindOption {
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

interface BindInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

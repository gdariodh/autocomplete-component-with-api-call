import React from 'react';

export interface Image {
  alt: string;
  height: number;
  url: string;
  width: number;
}

export interface OptionSourceAutoComplete {
  label: string;
  value: any;
  image?: Image;
}

export interface AutoCompleteHandler {
  options: OptionSourceAutoComplete[];
  bindOption: BindOption;
  bindOptions: BindOptions;
  selectedIndex: number;
}

export interface AutoCompleteInputProps {
  placeholder?: string;
  delay?: number;
  className?: string;
  children?: (args: AutoCompleteHandler) => React.ReactNode;
  source: (search: string) => Promise<OptionSourceAutoComplete[]>;
  handleSelection: (value: any) => void;
}

export interface OptionItemProps {
  item: OptionSourceAutoComplete;
  isActive: boolean;
}

export interface UseAutoCompleteProps {
  delay?: number;
  source: (searchTerm: string) => Promise<OptionSourceAutoComplete[]>;
  onChange: (selectedOption: OptionSourceAutoComplete) => void;
}

export interface UseAutoCompleteReturn {
  bindOption: BindOption;
  bindInput: BindInput;
  bindOptions: BindOptions;
  isBusy: boolean;
  suggestions: OptionSourceAutoComplete[];
  selectedIndex: number;
  clearSuggestions: () => void;
}

export interface BindOptions {
  ref: React.RefObject<HTMLUListElement>;
}

export interface BindOption {
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export interface BindInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

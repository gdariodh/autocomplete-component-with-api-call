import React, { useRef, useState, useCallback } from 'react';
import { KEY_CODES } from '../constants/autocomplete.constant';
import {
  Option,
  UseAutoCompleteProps,
  UseAutoCompleteReturn,
} from '../models/autocomplete.model';

export default function useAutoComplete({
  delay = 500,
  source,
  onChange,
}: UseAutoCompleteProps): UseAutoCompleteReturn {
  const [myTimeout, setMyTimeout] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [suggestions, setSuggestions] = useState<Option[]>([]);
  const [isBusy, setBusy] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [textValue, setTextValue] = useState('');

  const delayInvoke = useCallback(
    (cb: () => void) => {
      if (myTimeout) {
        clearTimeout(myTimeout);
      }
      setMyTimeout(setTimeout(cb, delay));
    },
    [delay, myTimeout]
  );

  const selectOption = useCallback(
    (index: number) => {
      if (index > -1) {
        onChange(suggestions[index]);
        setTextValue(suggestions[index].label);
      }
      clearSuggestions();
    },
    [onChange, suggestions]
  );

  const getSuggestions = useCallback(
    async (searchTerm: string) => {
      if (searchTerm && source) {
        const options = await source(searchTerm);
        setSuggestions(options);
      }
    },
    [source]
  );

  const clearSuggestions = useCallback(() => {
    setSuggestions([]);
    setSelectedIndex(-1);
  }, []);

  const onTextChange = useCallback(
    (searchTerm: string) => {
      setBusy(true);
      setTextValue(searchTerm);
      clearSuggestions();
      delayInvoke(() => {
        getSuggestions(searchTerm);
        setBusy(false);
      });
    },
    [clearSuggestions, delayInvoke, getSuggestions]
  );

  const optionHeight = listRef.current?.children[0]?.clientHeight ?? 0;

  const scrollUp = useCallback(() => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
    if (listRef.current) {
      listRef.current.scrollTop -= optionHeight;
    }
  }, [selectedIndex, optionHeight]);

  const scrollDown = useCallback(() => {
    if (selectedIndex < suggestions.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
    if (listRef.current) {
      listRef.current.scrollTop = selectedIndex * optionHeight;
    }
  }, [selectedIndex, suggestions.length, optionHeight]);

  const pageDown = useCallback(() => {
    setSelectedIndex(suggestions.length - 1);
    if (listRef.current) {
      listRef.current.scrollTop = suggestions.length * optionHeight;
    }
  }, [suggestions.length, optionHeight]);

  const pageUp = useCallback(() => {
    setSelectedIndex(0);
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const keyOperation: Record<string, () => void> = {
        [KEY_CODES.DOWN]: scrollDown,
        [KEY_CODES.UP]: scrollUp,
        [KEY_CODES.ENTER]: () => selectOption(selectedIndex),
        [KEY_CODES.ESCAPE]: clearSuggestions,
        [KEY_CODES.PAGE_DOWN]: pageDown,
        [KEY_CODES.PAGE_UP]: pageUp,
      };

      const keyCode = e.key;
      const operationFound = keyOperation[keyCode];

      if (operationFound) {
        operationFound();
      } else {
        setSelectedIndex(-1);
      }
    },
    [
      clearSuggestions,
      pageDown,
      pageUp,
      scrollDown,
      scrollUp,
      selectOption,
      selectedIndex,
    ]
  );

  return {
    bindOption: {
      onClick: (e: React.MouseEvent<HTMLLIElement>) => {
        const index = [...e.currentTarget.parentElement!.children].indexOf(
          e.currentTarget
        );
        selectOption(index);
      },
    },
    bindInput: {
      value: textValue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        onTextChange(e.target.value),
      onKeyDown,
    },
    bindOptions: {
      ref: listRef,
    },
    isBusy,
    suggestions,
    selectedIndex,
    clearSuggestions,
  };
}

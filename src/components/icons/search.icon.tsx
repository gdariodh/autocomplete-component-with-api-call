import React from 'react';
import { BaseIcon } from './base-icon';

export function SearchIcon(): React.ReactElement {
  return (
    <BaseIcon className="lucide lucide-search">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </BaseIcon>
  );
}

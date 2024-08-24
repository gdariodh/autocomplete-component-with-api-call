import React from 'react';
import { BaseIcon } from './base-icon';

export function CancelSearchIcon(): React.ReactElement {
  return (
    <BaseIcon className="lucide lucide-search-x">
      <path d="m13.5 8.5-5 5" />
      <path d="m8.5 8.5 5 5" />
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </BaseIcon>
  );
}

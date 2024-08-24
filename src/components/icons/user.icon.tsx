import React from 'react';
import { BaseIcon } from './base-icon';

export function UserIcon(): React.ReactElement {
  return (
    <BaseIcon className="lucide lucide-user">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </BaseIcon>
  );
}

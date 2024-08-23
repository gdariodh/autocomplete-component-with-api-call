import { SuggestionItemProps } from './models/autocomplete.model';
import UserIcon from '@/assets/icons/user.icon.svg';

export default function SuggestionItem({ item }: SuggestionItemProps) {
  const image = item?.image;

  return (
    <div className="suggestion">
      {image ? (
        <img
          alt={item.label}
          className="suggestion-image"
          height={image.height}
          src={image.url}
          title={item.label}
          width={image.width}
        />
      ) : (
        <img src={UserIcon} alt={item.label} className="suggestion-image" />
      )}
      <div>{item.label}</div>
    </div>
  );
}

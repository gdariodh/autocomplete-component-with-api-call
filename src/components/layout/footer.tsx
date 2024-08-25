import { MY_WEBSITE_URL } from '@/config/constants';

export function Footer() {
  return (
    <footer>
      <p>
        Made with ❤️ by{' '}
        <a href={MY_WEBSITE_URL} className="contactLink" target="_blank">
          @gabrieldariodiazhernandez
        </a>
      </p>
    </footer>
  );
}

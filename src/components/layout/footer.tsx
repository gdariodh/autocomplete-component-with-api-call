import { VITE_MY_WEBSITE_URL } from '@/config/constants';

export function Footer() {
  return (
    <footer>
      <p>
        Made with ❤️ by{' '}
        <a href={VITE_MY_WEBSITE_URL} className="contact-link" target="_blank">
          @gabrieldariodiazhernandez
        </a>
      </p>
    </footer>
  );
}

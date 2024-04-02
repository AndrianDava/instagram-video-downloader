import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-screen-xl px-4 py-2 text-center text-secondary">
      <div className="flex flex-col items-center gap-2 text-center text-xs">
        <div className="flex items-center gap-1">
          <Link>
            Buatan Andzz
          </Link>
          <span aria-hidden="true">|</span>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

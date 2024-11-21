import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const ContactInfoNavbar = () => {
  return (
    <div className="flex items-center space-x-8">
      {/* Phone Group */}
      <div className="flex items-center space-x-2">
        <Image
          src="/icons/phone-icon.svg"
          alt="Phone icon"
          width={15}
          height={15}
          className="w-5 h-5"
        />
        <Link
          href="tel:+96170746299"
          className={`hover:opacity-80 transition-opacity text-sm ${inter.className}`}
        >
          +961 70746299
        </Link>
      </div>

      {/* Email Group */}
      <div className="flex items-center space-x-2">
        <Image
          src="/icons/email-icon.svg"
          alt="Email icon"
          width={15}
          height={15}
          className="w-5 h-5"
        />
        <Link
          href="mailto:samijoehayek1@gmail.com"
          className={`hover:opacity-80 transition-opacity text-sm ${inter.className}`}
        >
          samijoehayek1@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default ContactInfoNavbar;

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  console.log(locale);

  return (
    <nav className="w-screen bg-[#3C3D37] h-28 rounded-b-3xl flex justify-between items-center px-8 relative">
      {/* Logo */}
      <Image
        src="/images/eotc-logo-original-2.png"
        alt="logo"
        width={70}
        height={70}
        className="rounded-full"
      />

      {/* Hamburger Menu for Mobile */}
      <input
        id="menu-toggle"
        type="checkbox"
        className="hidden peer" // Hidden checkbox to act as the menu toggle
      />
      <label
        htmlFor="menu-toggle"
        className="text-white text-3xl cursor-pointer md:hidden" // Visible only on mobile (`md:hidden`)
      >
        ☰
      </label>

      {/* Navigation Links */}
      <div
        className="hidden peer-checked:flex flex-col absolute top-28 left-0 w-full bg-[#3C3D37] space-y-4 py-4 
        md:peer-checked:hidden md:flex md:flex-row md:space-y-0 md:space-x-10 md:relative md:top-0 md:w-auto 
        z-50" // Ensure it appears on top with z-index
      >
        {/* Home */}
        <div className="bg-slate-100 min-w-20 h-8 flex justify-center items-center rounded-md hover:bg-[#697565] cursor-pointer">
          <Link href="/" className="text-black font-medium">{t('home')}</Link>
        </div>
        {/* Gtsawi */}
        <div className="bg-slate-100 min-w-20 h-8 flex justify-center items-center rounded-md hover:bg-[#697565] cursor-pointer">
          <Link href={`/${locale}/gtsawi1`} className="text-black font-medium">{t('gtsawi')}</Link>
        </div>
        {/* Mahlet */}
        <div className="bg-slate-100 min-w-20 h-8 flex justify-center items-center rounded-md hover:bg-[#697565] cursor-pointer">
          <Link href="/" className="text-black font-medium">{t('mahlet')}</Link>
        </div>
      </div>

      {/* Local Switcher */}
      <LocalSwitcher />
    </nav>
  );
}

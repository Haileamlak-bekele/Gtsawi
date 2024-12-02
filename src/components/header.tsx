import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();

 

  return (
    <nav className="w-screen bg-[#3C3D37] h-28 rounded-b-3xl flex justify-between items-center px-8">
      <Image
        src="/images/eotc-logo-original-2.png"
        alt="logo"
        width={70}
        height={70} // Adjusted height for a better logo aspect ratio
        className="rounded-full"
      />

      {/* Navigation Links */}
      <div className="flex space-x-10">
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

      <LocalSwitcher />
    </nav>
  );
}

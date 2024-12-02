import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <div className="h-14  bg-[#3C3D37] text-center w-screen">
      <p className='text-white'>{t('copyright')}</p>
    </div>
  );
}

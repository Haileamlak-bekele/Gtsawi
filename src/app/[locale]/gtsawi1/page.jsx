
import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import {useLocale} from 'next-intl'


export default function Gtsawi1() {
  const t = useTranslations("gtsawi1")
  const locale = useLocale();
  return (
    <div>
     
      <div className='w-5/6 h-16 m-auto bg-[#D9D9D9]'>
      <h2>{t('title')}</h2>
      </div>
      <div className='w-48 h-12 mt-3 m-auto bg-[#D9D9D9]'>
      <h2>{t('choose')}</h2>
      </div>
      <div className='m-auto flex justify-evenly'>
      <div className='w-28 h-36 bg-[#3C3D37] rounded-lg cursor-pointer hover:bg-[#697565]'>
        <Link href='#' className='text-white mt-9 pt-9 w-28 h-36 flex align-bottom text-2xl '>{t('seasonal')}</Link>
      </div>
      <div className='w-28 h-36 bg-[#3C3D37] rounded-lg cursor-pointer hover:bg-[#697565]'>
      <Link href={`/${locale}/gtsawi2`} className='text-white text-center mt-9 text-4xl flex align-bottom justify-evenly pt-9 w-28 h-36'>{t('daily')}</Link>
      </div>
      </div>
     
    
    </div>
  )
}
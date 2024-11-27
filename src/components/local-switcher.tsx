'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentLocale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    // Remove the current locale from the pathname
    const segments = pathname.split('/').filter(Boolean); // Split and remove empty strings
    if (segments[0] === currentLocale) {
      segments.shift(); // Remove the current locale segment
    }

    // Reconstruct the new path with the selected locale
    const newPath = `/${nextLocale}/${segments.join('/')}`;
    const queryString = searchParams.toString(); // Preserve query parameters
    const newUrl = queryString ? `${newPath}?${queryString}` : newPath;

    startTransition(() => {
      router.replace(newUrl); // Navigate to the updated URL
    });
  };

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="bg-slate-100 px-3 py-1 rounded-md text-center mb-3">
        <h3 className="text-black font-medium">Language</h3>
      </div>
      <select
        defaultValue={currentLocale}
        className=""
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="am">Amharic</option>
      </select>
    </div>
  );
}

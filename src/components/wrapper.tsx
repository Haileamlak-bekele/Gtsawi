import { getTranslations } from 'next-intl/server';
import Months from './months';

export default async function ServerWrapper() {
  // Fetch translations from server
  const t = await getTranslations('gtsawi1');
  const g = await getTranslations('gtsawi2');

  return (
    <Months
      translations={{
        t,
        g,
      }}
    />
  );
}

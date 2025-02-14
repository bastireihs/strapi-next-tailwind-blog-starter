import { JSX } from 'react';

import { SectionHeader } from '@/components/Elements';

export default async function Legal(): Promise<JSX.Element> {
  return <SectionHeader heading="Legal notice and privacy policy" />;
}

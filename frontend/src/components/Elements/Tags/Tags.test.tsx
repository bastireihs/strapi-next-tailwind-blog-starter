import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ICategory } from '@/lib/interfaces';

import Tags from './Tags';

const mockCategories: ICategory[] = [
  {
    id: '1',
    name: 'Category 1',
    slug: 'category-1',
    documentId: '',
    articles: [],
  },
  {
    id: '2',
    name: 'Category 2',
    slug: 'category-2',
    documentId: '',
    articles: [],
  },
];

describe('Tags', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Tags categories={mockCategories} />);
    expect(getByText('Category 1')).toBeInTheDocument();
    expect(getByText('Category 2')).toBeInTheDocument();
  });

  it('renders the correct number of Tag components', () => {
    const { getAllByRole } = render(<Tags categories={mockCategories} />);
    expect(getAllByRole('link')).toHaveLength(mockCategories.length);
  });
});

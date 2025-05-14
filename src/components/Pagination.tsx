import React from 'react';

import { PaginationProps } from '@/features/pagination/types';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalCount,
  onPageChange,
}) => {

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white mt-5 pt-5">
      <div className="text-sm text-gray-700">
        Página <span className="font-medium">{currentPage}</span> de{' '}
        <span className="font-medium">{totalCount}</span>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalCount}
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Pagination;
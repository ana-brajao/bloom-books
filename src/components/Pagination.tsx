import { CaretLeft, CaretRight } from 'phosphor-react';
import classnames from 'classnames';

interface PaginationProps {
  totalCount: number;
  page: number;
  perPage: number;
  onChangePage: (page: number) => void;
}

export const Pagination = ({
  page,
  perPage,
  onChangePage,
  totalCount,
}: PaginationProps) => {
  const pageItems = Math.ceil(totalCount / perPage);

  return (
    <div className="flex items-center justify-center mt-6 gap-4">
      <button
        type="button"
        className="border border-gray-700 rounded-xl text-gray-700 p-2 text-base font-medium disabled:opacity-30"
        disabled={page === 1}
        onClick={() => onChangePage(page - 1)}
      >
        <CaretLeft size={16} weight="bold" />
      </button>

      {Array(pageItems)
        .fill(null)
        .map((_, index) => (
          <button
            key={`pagination-button-${index}`}
            type="button"
            onClick={() => onChangePage(index + 1)}
            className={classnames(
              'border border-gray-700 rounded-xl py-1 px-3 text-base font-medium',
              page === index + 1 ? 'bg-gray-700 text-white' : 'text-gray-700',
            )}
          >
            {index + 1}
          </button>
        ))}

      <button
        type="button"
        className="border border-gray-700 rounded-xl text-gray-700 p-2 text-base font-medium disabled:opacity-30"
        disabled={page === pageItems}
        onClick={() => onChangePage(page + 1)}
      >
        <CaretRight size={16} weight="bold" />
      </button>
    </div>
  );
};

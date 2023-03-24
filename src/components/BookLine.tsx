import classNames from 'classnames';

interface BookLineProps {
  book: Book;
  listLayoutType: 'LIST' | 'GRID';
}

export const BookLine = ({ book, listLayoutType }: BookLineProps) => {
  return (
    <div
      className={classNames(
        'flex w-full justify-between',
        listLayoutType === 'GRID' ? 'flex-col' : 'flex-row items-center',
      )}
    >
      <div
        className={classNames(
          'flex gap-x-2',
          listLayoutType === 'GRID' ? 'flex-col' : 'flex-row items-center',
        )}
      >
        <a href="#" className="text-primary text-xl underline">
          {book.display_name}
        </a>
        <span className="text-xs text-neutral-500 font-medium">
          Atualizada em 00/00/00
        </span>
      </div>

      <p
        className={classNames(
          'text-base text-neutral-800 font-medium',
          listLayoutType === 'GRID' && 'mt-4',
        )}
      >
        Última publicação: {book.newest_published_date}
      </p>
      <p className="text-base text-neutral-800 font-medium">
        Publicação mais antiga: {book.oldest_published_date}
      </p>
    </div>
  );
};

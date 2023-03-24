import classNames from 'classnames';
import { Rows, SquaresFour } from 'phosphor-react';

interface PageTopBarProps {
  perPage: number;
  onChangePerPage: (newPerPage: number) => void;
  title: string;
  listLayoutType: 'LIST' | 'GRID';
  onChangeListLayoutType: (listLayoutType: 'LIST' | 'GRID') => void;
}

export const PageTopBar = ({
  perPage,
  onChangePerPage,
  title,
  listLayoutType,
  onChangeListLayoutType,
}: PageTopBarProps) => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4">
        <h2 className="font-bold text-gray-900 text-2xl">{title}</h2>

        <div className="flex gap-8">
          <div className="flex gap-2 items-center">
            <p className="text-medium text-base text-gray-900">Exibir</p>
            <select
              id="perPage"
              name="perPage"
              value={perPage}
              onChange={e => onChangePerPage(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
            <p className="text-medium text-base text-gray-900">por vez</p>
          </div>

          <div className="flex gap-4">
            <Rows
              size={32}
              onClick={() => onChangeListLayoutType('LIST')}
              className={classNames(
                'hover:text-primary',
                listLayoutType === 'LIST' ? 'text-primary' : 'text-gray-400',
              )}
            />
            <SquaresFour
              size={32}
              onClick={() => onChangeListLayoutType('GRID')}
              className={classNames(
                'hover:text-primary',
                listLayoutType === 'GRID' ? 'text-primary' : 'text-gray-400',
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

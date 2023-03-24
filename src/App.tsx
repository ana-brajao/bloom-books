import { useEffect, useState } from 'react';
import { BookLine } from './components/BookLine';
import { Layout } from './components/layout/Layout';
import { Pagination } from './components/Pagination';

import './styles/main.css';
import { PageTopBar } from './components/PageTopBar';
import classNames from 'classnames';

const API_URL = 'https://api.nytimes.com/svc/books/v3/lists/names.json';

type ListLayout = 'LIST' | 'GRID';

export const App = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [books, setBooks] = useState<Book[]>([]);
  const [listLayoutType, setListLayoutType] = useState<ListLayout>('LIST');

  const fetchBook = async () => {
    try {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('api-key', '0DVhPFs2ccgA9WQyLPsAnHWGCzN2GDOL');

      const response = await fetch(`${API_URL}?${urlSearchParams.toString()}`, {
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
      });

      const status = response.status;

      if (status !== 200) {
        throw new Error('Falha ao requisitar a api.');
      }

      const data = await response.json();

      setBooks(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect sempre será disparado quando o componente renderizar, caso não ter nenhuma dependencia
  useEffect(() => {
    fetchBook();
  }, []);

  const paginate = (items: Book[], page: number, perPage: number) => {
    return items.slice((page - 1) * perPage, page * perPage);
  };

  return (
    <Layout>
      <PageTopBar
        title="Gêneros"
        perPage={perPage}
        onChangePerPage={setPerPage}
        listLayoutType={listLayoutType}
        onChangeListLayoutType={setListLayoutType}
      />

      <div className="container mx-auto py-8">
        <div
          className={classNames(
            listLayoutType === 'LIST'
              ? 'flex flex-col gap-8'
              : 'grid grid-cols-5 gap-8',
          )}
        >
          {paginate(books, page, perPage).map((book, index) => (
            <BookLine
              key={`book-${index}`}
              book={book}
              listLayoutType={listLayoutType}
            />
          ))}
        </div>

        <Pagination
          page={page}
          perPage={perPage}
          totalCount={59}
          onChangePage={newPage => setPage(newPage)}
        />
      </div>
    </Layout>
  );
};

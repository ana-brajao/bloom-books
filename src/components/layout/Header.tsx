import starIcon from '../../assets/star.svg';

export const Header = () => {
  return (
    <header className="bg-primary">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-4xl font-medium">Bloom Books</h1>
          <img src={starIcon} alt="Ícone de estrela" width={24} height={24} />
        </div>
      </div>
    </header>
  );
};

export interface SearchProps {}

export type SearchComponent = React.FC<SearchProps>;

export const Search: SearchComponent = () => {
  return (
    <div className="search">
      <input className="search-input" type="text" placeholder="Search" />
    </div>
  );
};

Search.displayName = 'app/Search';

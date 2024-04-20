export interface SearchProps {}

export type SearchComponent = React.FC<SearchProps>;

export const Search: SearchComponent = () => {
  return (
    <div className="Search">
      <span>Search</span>
    </div>
  );
};

Search.displayName = 'app/Search';

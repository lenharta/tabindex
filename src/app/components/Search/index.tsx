export interface SearchProps {}

export type SearchComponent = React.FC<SearchProps>;

export const Search: SearchComponent = () => {
  return (
    <div className="Search">
      <input className="Search-input" type="text" placeholder="Search" />
    </div>
  );
};

Search.displayName = 'app/Search';

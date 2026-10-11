function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by ID or Name..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
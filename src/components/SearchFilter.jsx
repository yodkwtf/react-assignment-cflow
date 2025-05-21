const SearchFilter = ({ searchQuery, setSearchQuery, filter, setFilter }) => {
  return (
    <div className="search-filter">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="🔍 Search by author or keyword"
        className="search-input"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-select"
      >
        <option value="all">All Posts</option>
        <option value="original">Original Only</option>
        <option value="reshared">Reshared Only</option>
        <option value="video">Posts with Video</option>
      </select>
    </div>
  );
};

export default SearchFilter;

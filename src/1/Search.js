import React from 'react';

const Search = ({ searchTerm, setSearchTerm, handleSearch, searchResults }) => {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Введите ваш запрос"
      />
      <button onClick={handleSearch}>Поиск</button>
      <div>
        {searchResults.length == 0 ? (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          <p>Нет результатов поиска</p>
        )}
      </div>
    </div>
  );
};

export default Search;

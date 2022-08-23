import React, { useState } from 'react';

const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9e7bb79c1e7b7ad458568637c0dbdfe4&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => setResults(data.results));
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
            alt="pic"
          />
          <div className="titles">
            <h1>Hoş Geldiniz.</h1>
            <h2>
              Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Film, dizi, kişi ara..."
              value={query}
              onChange={onChange}
            />
          </div>
          {results.map((movie) => (
            <h1>{movie.title}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Add;

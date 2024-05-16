import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import Person from './Person';

const Search = () => {
  const [searchFilter, setSearchFilter] = useState('');
  return (
    <>
      <div>
        Search
        <input
          type="text"
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <button>OK</button>
      </div>
      {data &&
        data.persons.map((person, index) => (
          <Link key={person.id} link={person} index={index} />
        ))}
    </>
  );
};

export default Search;
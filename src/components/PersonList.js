import React from 'react';
import Person from './Person';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
query {
  persons {
    id
    firstName
    lastName
    age
    email
    genre
    postedBy {
      id
      username
    }
    votes {
      id
      user {
        id
      }
    }
  }
}
`
;

const PersonList = () => {
    const { data } = useQuery(FEED_QUERY);

    return (
        <div>
          {data && (
            <>
              {data.persons.map((person, index) => (
                <Person key={person.id} person={person} index={index} />
              ))}
            </>
          )}
        </div>
      );
    };

export default PersonList;
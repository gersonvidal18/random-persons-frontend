import React from 'react';
import { AUTH_TOKEN } from '../constants';
import { useMutation, gql } from '@apollo/client';

const VOTE_MUTATION = gql`
mutation VoteMutation($personId: Int!) {
  createVote(personId: $personId) {
    person {
      id
    }
    person {
      id
      votes {
        id
        user {
          id
        }
      }
    }
    user {
      id
    }
  }
}
`;


const Person = (props) => {
  const { person } = props;
  const authToken = localStorage.getItem(AUTH_TOKEN);

  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      personId: person.id
    }
  });

  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{props.index + 1}.</span>
        {authToken && (
          <div
            className="ml1 gray f11"
            style={{ cursor: 'pointer' }}
            onClick={vote}
          >
            ▲
          </div>
        )}
      </div>
      <div className="ml1">
        <div>
          <h2>{person.firstName} {person.lastName}  </h2> <li> {person.age} </li>  <li> {person.email} </li> <li> {person.genre} </li>
        </div>
        {(
          <div className="f6 lh-copy gray">
            {person.votes.length} votes | by{' '}
            {person.postedBy ? person.postedBy.name : 'Unknown'}{' '}
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Person;
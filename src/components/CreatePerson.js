import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


const CREATE_PERSON_MUTATION = gql`
  mutation PostMutation(
    $firstName: String!
    $lastName: String!
    $age: Int! 
    $email: String!
    $genre: String!
  ) {
    createPerson(firstName: $firstName, lastName: $lastName, age: $age, email: $email, genre: $genre) {
        id
        firstName
        lastName
        age
        email
        genre
      }
    }
`;

const CreatePerson = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    genre: '',
  });

  const [createPerson] = useMutation(CREATE_PERSON_MUTATION, {
    variables: {
      firstName: formState.first_name,
      lastName: formState.last_name,
      age: formState.age,
      email: formState.email,
      genre: formState.genre
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPerson();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.first_name}
            onChange={(e) =>
              setFormState({
                ...formState,
                first_name: e.target.value
              })
            }
            type="text"
            placeholder="The first name of the person..."
          />
          <input
            className="mb2"
            value={formState.last_name}
            onChange={(e) =>
              setFormState({
                ...formState,
                last_name: e.target.value
              })
            }
            type="text"
            placeholder="The last name of the person..."
          />
          <input
            className="mb2"
            value={formState.age}
            onChange={(e) =>
              setFormState({
                ...formState,
                age: e.target.value
              })
            }
            type="number"
            placeholder="The age of the person..."
          />
          <input
            className="mb2"
            value={formState.email}
            onChange={(e) =>
              setFormState({
                ...formState,
                email: e.target.value
              })
            }
            type="email"
            placeholder="The email of the person..."
          />
          <input
            className="mb2"
            value={formState.genre}
            onChange={(e) =>
              setFormState({
                ...formState,
                genre: e.target.value
              })
            }
            type="text"
            placeholder="The genre of the person..."
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePerson;
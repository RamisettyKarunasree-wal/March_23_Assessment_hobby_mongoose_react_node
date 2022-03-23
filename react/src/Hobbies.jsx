import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Hobbies() {
  const [hobbies, setHobbies] = useState([]);
  const getHobbies = () => {
    axios
      .get('/hobbies')
      .then((res) => {
        console.log(res.data);
        setHobbies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getHobbies();
  }, []);
  const addHobby = (event) => {
    event.preventDefault();
    const hobbyObj = {
      name: event.target.name.value,
      description: event.target.description.value,
      date: event.target.date.value,
    };
    axios
      .post('/hobbies', hobbyObj)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    getHobbies();
  };
  const deleteHobby = (id) => {
    console.log(id);
    axios
      .delete(`/hobbies/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    getHobbies();
  };
  return (
    <div>
      <form onSubmit={addHobby}>
        <div>
          <b>Hobby Name:</b>
        </div>
        <div>
          <input type="text" name="name" />
        </div>
        <br />
        <div>
          <b>Hobby Description:</b>
        </div>
        <textarea name="description" />
        <br />
        <div>
          <b>Date of Creation:</b>
        </div>
        <input type="date" name="date" />
        <br />
        <br />
        <button type="submit">Add Hobby</button>
      </form>
      <tr>
        <th>Hobby</th>
        <th>Description</th>
        <th>Date of Creation</th>
        <th>Delete</th>
      </tr>
      {hobbies.map((val) => (
        <tr>
          <td>{val.name}</td>
          <td>{val.description}</td>
          <td>{val.date}</td>
          <td>
            <button
              type="button"
              onClick={() => {
                // eslint-disable-next-line dot-notation
                deleteHobby(val['_id']);
              }}
            >
              deleteItem
            </button>
          </td>
        </tr>
      ))}
    </div>
  );
}

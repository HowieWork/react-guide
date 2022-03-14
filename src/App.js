import { useState, useEffect, Fragment } from 'react';

function App() {
  const [usersData, setUsersData] = useState(null);
  // [{name: ..., gender: ..., email: ..., location: ...} ...]
  const [users, setUsers] = useState([]);
  const [isLocationSorted, setIsLocationSorted] = useState(false);
  const [sortedUsers, setSortedUsers] = useState();

  // HELPER: EXTRACT OBJECT KEYS
  const extractObjKeys = (obj) => {
    let keysOfObj = [];
    Object.keys(obj).forEach((objKey) => {
      if (typeof obj[objKey] !== 'object') keysOfObj.push(objKey);
      if (typeof obj[objKey] === 'object')
        keysOfObj = [...keysOfObj, ...extractObjKeys(obj[objKey])];
    });
    return keysOfObj;
  };

  // CREATE NEW USER: name, gender, email, location
  const createNewUser = ({ gender, email, name, location, ...rest }) => {
    const newUser = {};
    const { first: firstName, last: lastName, title: nameTitle } = name;
    const {
      street: { number: streetNumber, name: streetName },
      city,
      state,
      country,
      postcode,
    } = location;

    newUser.name = `${nameTitle} ${firstName} ${lastName}`;
    newUser.gender = gender;
    newUser.email = email;
    newUser.location = `${streetNumber} ${streetName}, ${city} ${state} ${country}, ${postcode}`;

    return newUser;
  };

  // HANDLING SORT BUTTON
  const sortLocationHandler = (event) => {
    event.preventDefault();

    setIsLocationSorted((prev) => !prev);

    // SORT LOCATIONS
    const tempUsers = [...users];
    // (a, b) => {
    //   if (a < b) return -1;
    //   if (a > b) return 1;
    //   return 0;
    // }

    tempUsers.sort((a, b) => {
      const locationA = a.location.toUpperCase();
      const locationB = b.location.toUpperCase();
      if (locationA < locationB) return -1;
      if (locationA > locationB) return 1;
      return 0;
    });

    setSortedUsers(tempUsers);
  };

  let displayHeaders;
  let displayData;

  displayHeaders = (
    <tr>
      <th>NAME</th>
      <th>GENDER</th>
      <th>EMAIL</th>
      <th>
        LOCATION <button onClick={sortLocationHandler}>sort</button>
      </th>
    </tr>
  );

  if (users.length !== 0) {
    // LOCATION NOT SORTED
    if (!isLocationSorted) {
      displayData = (
        <Fragment>
          {users.map((user, userIdx) => {
            return (
              <tr key={userIdx}>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.location}</td>
              </tr>
            );
          })}
        </Fragment>
      );
    }
    // LOCATION IS SORTED
    if (isLocationSorted) {
      displayData = (
        <Fragment>
          {sortedUsers.map((user, userIdx) => {
            return (
              <tr key={userIdx}>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.location}</td>
              </tr>
            );
          })}
        </Fragment>
      );
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // fetch https://randomuser.me/api/?results=20
        const response = await fetch('https://randomuser.me/api/?results=20');
        const data = await response.json();
        // DO SOMETHING WITH DATA
        setUsersData(data.results);

        let usersList = [];
        for (const userData of data.results) {
          const newUser = createNewUser(userData);
          usersList.push(newUser);
        }
        setUsers(usersList);
      } catch (err) {
        // HANDLE ANY ERROR
        console.error(err.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Let's get started!</h2>
      <table>
        <thead>{displayHeaders}</thead>
        <tbody>{displayData}</tbody>
      </table>
    </div>
  );
}

export default App;

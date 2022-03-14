import { Fragment, useEffect, useState } from 'react';

import './FetchAPI.css';

const FetchAPI = () => {
  // 1. FETCH USERSDATA *FOR GETTING FAMILIAR WITH USERS DATA
  // const [usersData, setUsersData] = useState(null);

  // 2. DO SOMETHING WITH USERSDATA
  const [users, setUsers] = useState([]);

  // 3. CREATE TABLE BASED ON DATA: USERS
  // 4. SORTING FEATURE: BUTTON -> SORT -> DISPLAY SORTED RESULTS
  const [isLocationSorted, setIsLocationSorted] = useState(false);
  const [sortedUsers, setSortedUsers] = useState([]);

  const sortHandler = (event) => {
    event.preventDefault();
    setIsLocationSorted((prev) => !prev);

    // SORTING USERS BASED ON LOCATIONS
    if (users.length === 0) return;

    const tempUsers = [...users];

    tempUsers.sort(function (a, b) {
      const locationA = a.location.toUpperCase(); // ignore upper and lowercase
      const locationB = b.location.toUpperCase(); // ignore upper and lowercase
      if (locationA < locationB) {
        return -1;
      }
      if (locationA > locationB) {
        return 1;
      }
      return 0;
    });

    setSortedUsers(tempUsers);
  };

  let tableHeadContent;
  let tableBodyContent;

  tableHeadContent = (
    <tr>
      <th>NAME</th>
      <th>GENDER</th>
      <th>EMAIL</th>
      <th>
        LOCATION <button onClick={sortHandler}>sort</button>
      </th>
    </tr>
  );

  if (users.length !== 0) {
    console.log('GIVE ME TABLE BODY CONTENT');
    if (!isLocationSorted) {
      tableBodyContent = (
        <Fragment>
          {users.map((user, userIdx) => (
            <tr key={userIdx}>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.location}</td>
            </tr>
          ))}
        </Fragment>
      );
    }
    if (isLocationSorted) {
      tableBodyContent = (
        <Fragment>
          {sortedUsers.map((user, userIdx) => (
            <tr key={userIdx}>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.location}</td>
            </tr>
          ))}
        </Fragment>
      );
    }
  }

  const createNewUser = (userData) => {
    // NAME, GENDER, EMAIL, LOCATION
    const {
      gender,
      email,
      location: {
        street: { number: streetNumber, name: streetName },
        city,
        state,
        country,
        postcode,
      },
      name: { title: nameTitle, first: firstName, last: lastName },
    } = userData;

    const newUser = {
      name: `${nameTitle} ${firstName} ${lastName}`,
      gender: gender,
      email: email,
      location: `${streetNumber} ${streetName} ${city} ${state} ${country} ${postcode}`,
    };

    console.log(newUser);

    return newUser;
  };

  // HELPER: EXTRACT OBJECT KEYS
  /*
  const extractObjKeys = (obj) => {
    let keysOfObj = [];
    Object.keys(obj).forEach((objKey) => {
      keysOfObj.push(objKey);
    });
    return keysOfObj;
  };
  */

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        // setUsersData(data.results);

        let usersList = [];

        for (const userData of data.results) {
          const newUser = createNewUser(userData);
          usersList.push(newUser);
        }

        setUsers(usersList);
      } catch (err) {
        // HANDLE ANY ERROR FROM FETCHING
        console.error(err.message);
      }
    };

    fetchUsersData();
  }, []);

  return (
    <Fragment>
      {/* TASK DESCRIPTION */}
      <h2>Fetch API</h2>
      <div>
        <p>
          1. Fetch from provided API, create a table showing list of users, only
          including name, gender, email, location.
        </p>
        <p>2. Add sorting feature to location column *button, ascending</p>
        <p>*API link: https://randomuser.me/api/?results=10</p>
      </div>
      {/* --- DIVIDER --- */}
      <table>
        <thead>{tableHeadContent}</thead>
        <tbody>{tableBodyContent}</tbody>
      </table>
    </Fragment>
  );
};

export default FetchAPI;

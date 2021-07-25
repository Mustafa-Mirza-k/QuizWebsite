import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigationbar from "../../Navbar";
import { Table } from "react-bootstrap";

function Scores() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchScores() {
      await axios({
        method: "get", //you can set what request you want to be
        url: process.env.REACT_APP_BASE_URL + "/api/user",
      })
        .then((users) => setUserData(users))
        .catch((error) => console.log(error));
    }

    fetchScores();
  }, []);

  return (
    <div className="wrapper">
      <Navigationbar />
      <div className="sm-table">
        <div className="Tablehead">Scores Table</div>
        <Table className="responsive " bordered>
          <thead>
            <tr className="text-center">
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody className="normalFont text-center">
            {userData.data &&
              userData.data.map((user) => (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.score !== "" ? user.score : "-"}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Scores;

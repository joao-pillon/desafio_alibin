import { useEffect, useState } from "react";
import NavBar from "../NavBar";

import { TableContainer } from "./style.js";
import ellipsis from "../../assets/ellipsis.png";
import edit from "../../assets/edit.png";
import del from "../../assets/delete.png";

const TableBox = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const [showUsers, setShowUsers] = useState(true);
  const [showEmails, setShowEmails] = useState(true);
  const [showClients, setShowClients] = useState(true);
  const [showAccess, setShowAccess] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        return response.json();
      })

      .then((json) => setData(json));
  }, []);

  const handleClick = () => {
    if (open === true) {
      return setOpen(false);
    } else return setOpen(true);
  };

  return (
    <>
      <NavBar
        open={open}
        showUsers={showUsers}
        setShowUsers={setShowUsers}
        showEmails={showEmails}
        setShowEmails={setShowEmails}
        showClients={showClients}
        setShowClients={setShowClients}
        showAccess={showAccess}
        setShowAccess={setShowAccess}
      />
      <TableContainer>
        <table className="table">
          <thead>
            <tr>
              {showUsers ? <th>Usuário</th> : <></>}
              {showEmails ? <th>Email</th> : <></>}
              {showClients ? <th>Cliente</th> : <></>}
              {showAccess ? <th>Perfil de acesso</th> : <></>}
              <th className="ellipsis-container">
                <img
                  src={ellipsis}
                  isOpened="isOpened"
                  onClick={handleClick}
                  alt=""
                ></img>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((info) => {
              if (info.id % 2 === 0) {
                return (
                  <tr className="odd-columns">
                    {showUsers ? <td>{info.name}</td> : <></>}
                    {showEmails ? <td>{info.email}</td> : <></>}
                    {showClients ? <td>{info.company.name}</td> : <></>}
                    {showAccess ? (
                      <td>
                        <div className="profile">{info.username}</div>
                      </td>
                    ) : (
                      <></>
                    )}
                    <td className="odd-icons">
                      <img src={edit} alt=""/>
                      <img src={del} alt="" />
                    </td>
                  </tr>
                );
              }
              return (
                <tr className="even-columns">
                  {showUsers ? <td>{info.name}</td> : <></>}
                  {showEmails ? <td>{info.email}</td> : <></>}
                  {showClients ? <td>{info.company.name}</td> : <></>}
                  {showAccess ? (
                    <td>
                      <div className="profile">{info.username}</div>
                    </td>
                  ) : (
                    <></>
                  )}
                  <td className="even-icons">
                    <img src={edit} alt=""/>
                    <img src={del} alt=""/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};

export default TableBox;

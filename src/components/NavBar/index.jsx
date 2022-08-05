import { Nav, InputContainer } from "./style.js";

const NavBar = ({
  open,
  showUsers,
  setShowUsers,
  showEmails,
  setShowEmails,
  showClients,
  setShowClients,
  showAccess,
  setShowAccess,
}) => {
  const toogleUser = () => {
    if (showUsers === true) {
      return setShowUsers(false);
    } else return setShowUsers(true);
  };

  const toogleEmail = () => {
    if (showEmails === true) {
      return setShowEmails(false);
    } else return setShowEmails(true);
  };

  const toogleClient = () => {
    if (showClients === true) {
      return setShowClients(false);
    } else return setShowClients(true);
  };

  const toogleAccess = () => {
    if (showAccess === true) {
      return setShowAccess(false);
    } else return setShowAccess(true);
  };
  return (
    <Nav open={open}>
      <h3>Linhas por página</h3>
    <InputContainer>
        <div className="checkbox-container">
          <input type="checkbox" />
          Padrão<span className="checkmark"></span>
          <input type="checkbox" />
          50 linhas<span className="checkmark"></span>
        </div>{" "}
        <hr />
        <h3>Colunas</h3>
        <div className="checkbox-container">
          <input type="checkbox" onClick={toogleUser} /> Usuario{" "}
          <span className="checkmark"></span>
          <input type="checkbox" onClick={toogleEmail} />
          E-mail<span className="checkmark"></span>
          <input type="checkbox" onClick={toogleClient} />
          Cliente<span className="checkmark"></span>
          <input type="checkbox" onClick={toogleAccess} />
          Perfil de acesso<span className="checkmark"></span>
        </div>
</InputContainer>
    </Nav>
  );
};

export default NavBar;

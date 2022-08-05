import styled from "styled-components";

export const TableContainer = styled.div`
  width: 190vh;
  height: 81vh;
  margin-left: 5px;

  background-color: var(--branco);
  border-radius: 5px;

  box-shadow: 0px 0px 5px 0px rgba(169, 169, 169, 0.4);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(169, 169, 169, 0.4);
  -moz-box-shadow: 0px 0px 5px 0px rgba(169, 169, 169, 0.4);

  table {
    text-transform: upperCase;
    margin: 0px auto;
    width: 190vh;
    height: 80vh;
    text-shadow: 0px 1px 1px rgba(88, 88, 88, 0.2);
    text-align: left;
    vertical-align: baseline;
    justify-content: left;
    z-index: 1;
  }

  td,
  tr,
  table {
    background-color: var(--branco50);
    justify-items: center;
  }

  tr:hover {
    filter: brightness(0.975);
  }

  th {

    padding-left: 20px;
    font-size: 11px;
  }

  td {
    padding-left: 20px;
    font-size: 10px;

  }

  .even-columns {
    background-color: var(--branco-100);
    box-shadow: 0px 0px 5px 0px var(--branco-100);
    -webkit-box-shadow: 0px 0px 5px 0px var(--branco-100);
    -moz-box-shadow: 0px 0px 5px 0px var(--branco-100);

    border-top: 1px solid #ebe9e9bd;
    border-bottom: 1px solid #ebe9e9bd;
  }

  .even-icons {
    background-color: var(--branco-100);
    box-shadow: 0px 0px 5px 0px var(--branco-100);
    -webkit-box-shadow: 0px 0px 5px 0px var(--branco-100);
    -moz-box-shadow: 0px 0px 5px 0px var(--branco-100);

  }

  .odd-icons,
  .even-icons:hover {
    cursor: pointer;
  }

  .odd-columns {
    background-color: var(--branco-50);
  }

  .even-icons,
  .odd-icons {
    margin-top:10px;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;

    height:50% ;
    img {
      height: 20px;
      width: 20px;
    }
  }

  .profile {
    height: 15px;
    width: 110px;
    padding-top: 2px;

    font-size: 9px;
    font-weight: bold;
    text-align: center;
    color: #356892;
    background-color: #c0ecf1;
    border-radius: 7px;
    
  }

  
  .ellipsis-container {
    text-align: right;

    img {
      height: 16px;
      padding:10px;
    }
  }
  .ellipsis-container:hover {
    cursor: pointer;
  }

`;

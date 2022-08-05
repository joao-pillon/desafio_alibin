import styled from "styled-components";

export const Nav = styled.div`
  flex-flow: column nowrap;
  position: fixed;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(250%)")};
  transition: transform 0.33s ease-in-out;
  transform-origin: 0px;

  width: 180px;
  height: 305px;
  z-index: 6;
  top: 15%;
  right: 5%;

  border: 2px solid #f6f6f6;
  border-radius: 10px;
  background-color: #f6f6f6;

  font-size: 16px;
  text-align: left;
  line-height: 1.5rem;

  hr {
    width: 75%;
    margin: 25px 0px 0px 25px;
  }

  h3 {
    font-weight: 800px;
    font-size: 15px;
    margin: 12px;
  }

  box-shadow: 0px 0px 5px 0px rgba(171, 171, 171, 0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(171, 171, 171, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(171, 171, 171, 0.75);
`;


export const InputContainer = styled.div`
input:before {
  color:#f1f1f1;
  content: '✔';
  font-size: 18px;
}

input{
  all:unset;
  cursor: pointer;
  margin: 4px auto;
  border: 2px solid rgb(27, 199, 199);
  border-radius:4px;
  width: 16px;
  height: 16px;

  background-color: rgb(27, 199, 199);
}

input:checked{
  background-color:#f1f1f1;
}

.checkbox-container {
    display: grid;
    grid-template-columns: 1fr 4fr 0fr;
    justify-content: left;
    text-align: left;
  }
  
`
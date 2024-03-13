import React from "react";
import styled from "styled-components"
// import {ClearAllUsers} from "../store/slices/userSlice"
import { useDispatch } from "react-redux";
import { clearAllUsers } from "../store/action";

//  const DeleteAllUser = () => {
//   return <Wrapper>
//   <button>Clear user</button>
//   </Wrapper>
// };
const Wrapper = styled.section`

.clear-btn {
  background-color: #f44336; /* Button color */
  color: white;
  border: none;
  padding: 0.8rem 1.2rem; /* Button padding */
  border-radius: 0.5rem; /* Button border radius */
  cursor: pointer;
  font-size: 1.6rem;
  margin-top:2rem;
  transition: background-color 0.3s ease;
}

.clear-btn:hover {
  background-color: #d32f2f; /* Button hover color */
}
`
export const DeleteAllUser = () => {

  const dispatch = useDispatch()
  const deleteUsers = () =>{
    dispatch(clearAllUsers())
  }

  
  return <Wrapper>
  <button className ="clear-btn" onClick={deleteUsers}>Clear user</button>
  </Wrapper>
}
// export default DeleteAllUser
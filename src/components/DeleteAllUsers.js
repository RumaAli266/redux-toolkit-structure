import React from "react";
import styled from "styled-components";
// import { clearAllUsers } from "../Store/slices/UserSlice";
import { clearAllUsers } from "../Store/actions";
import { useDispatch } from "react-redux";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const deleteUsers = () => {
    dispatch(clearAllUsers());
  };

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteUsers}>
        DeleteAllUsers
      </button>
      ;
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;

export default DeleteAllUsers;

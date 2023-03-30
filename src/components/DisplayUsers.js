import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "./DisplayUsers.styled";
import { FiTrash2 } from "react-icons/fi";
import { removeUser } from "../Store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  const data = useSelector((state) => {
    return state.users;
  });

  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className="btn btn-delete" onClick={() => deleteUser(id)}>
              <FiTrash2 className="delete-icon" />
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
};

export default DisplayUsers;

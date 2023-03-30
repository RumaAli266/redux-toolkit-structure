import React from "react";
import DeleteAllUser from "./DeleteAllUsers";
import Wrapper from "./UserDetails.styled";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };
  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button
            className="btn add-btn"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New Users
          </button>
        </div>
        <ul>
          <DisplayUsers />
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

export default UserDetails;

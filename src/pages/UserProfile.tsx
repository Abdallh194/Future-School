import { useAppDispatch, useAppSelector } from "@Redux/hooks";
import { ToggleLoginState } from "@Redux/user/LoginSlice";
import { Link, Navigate } from "react-router-dom";

const UserProfile = () => {
  //selector
  const { isloggin } = useAppSelector((s) => s.user);
  //dispath
  const dispatch = useAppDispatch();
  return (
    <div>
      {isloggin ? (
        <>
          <h1>User Profile</h1>
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(ToggleLoginState());
            }}
          >
            Logout
          </button>
          <Link to="/">Home</Link>
        </>
      ) : (
        <Navigate to="/Login" replace={true} />
      )}
    </div>
  );
};

export default UserProfile;

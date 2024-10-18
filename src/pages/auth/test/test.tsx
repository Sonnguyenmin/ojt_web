import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export default function TestPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (Cookies.get("token") != null) {
      const token = JSON.parse(Cookies.get("token"));
      console.log("token check: " + JSON.stringify(token.data));
      setUser(token.data.user);
      if (
        token.data.roles.some(
          (item: any) => item === "ROLE_STUDENT" || item === "ROLE_PARTNER"
        )
      ) {
        console.log("true");
        // navigate("/*");
      }
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <h1>hihi test page</h1>
      {user ? (
        <>
          <p>Full name: {user?.fullName}</p>
          <p>Username: {user?.username}</p>
          <p>Email: {user?.email}</p>
          <p>{JSON.stringify(user)}</p>
        </>
      ) : (
        <>Ko co du lieu</>
      )}
    </div>
  );
}

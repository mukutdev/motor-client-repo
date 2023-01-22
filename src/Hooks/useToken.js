import { useEffect, useState } from "react";

export const useToken = email => {
  const [token, setToken] = useState("");

  // console.log(email);
  useEffect(() => {
   if(email){
    fetch(`http://localhost:5000/jwt?email=${email}`)
    .then(res => res.json())
    .then(data => {
      if (data.accessToken) {
        localStorage.setItem("resaleToken", data.accessToken);
        setToken(data.accessToken)
      }
    });
   }
  }, [email]);
  return [token]
};

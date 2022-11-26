import { useEffect, useState } from "react"

export const useAdmin = email =>{


    const [userLevel, setUserLevel] = useState({});
    const [isAdminLoading , setIsAdminLoading] = useState(true)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_url}/users/role/${email}`)
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            setUserLevel(data);
            setIsAdminLoading(false)
            // console.log(data);
          });
      }, [email]);
    
      return [userLevel , isAdminLoading]
}
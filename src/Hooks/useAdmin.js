import { useEffect, useState } from "react"

export const useAdmin = email =>{
  
    const [userLevel, setUserLevel] = useState({});
    const [isAdminLoading , setIsAdminLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/users/role/${email}`)
          .then(res => res.json())
          .then(data => {
            setUserLevel(data);
            setIsAdminLoading(false)
            // console.log(data);
          });
      }, [email]);
    
      return [userLevel , isAdminLoading]
}
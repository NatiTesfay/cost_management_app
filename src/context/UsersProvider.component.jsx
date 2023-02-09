import {createContext,useState,useEffect} from 'react';
import {getAllUsers} from '../service/users-rest';
export const usersContext = createContext()

export default function UsersProvider({children}){
    const [users,setUsers] = useState([])

    useEffect(()=>{
        getAllUsers().then(res => setUsers(res?.users))
    }
    ,[])
    
    return(
        <usersContext.Provider value={{users,setUsers}}>
            {children}
        </usersContext.Provider>
    )
}
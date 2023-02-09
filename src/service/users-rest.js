const baseUrl = 'https://data-that.onrender.com/api/users'

export const getAllUsers = async() => {
    try{
        return await fetch(`${baseUrl}`)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const getAUserById = async(id) => {
    try{
        return await fetch(`${baseUrl}/byId/${id}`)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const getAUserByParam = async(param) => {
    try{
        return await fetch(`${baseUrl}/${param}`)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const addAUser = async(newUser) => {
    const Options = {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    }
    try{
        return await fetch(`${baseUrl}/add`, Options)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const updateAUser = async(userToUpdate,userNewInfo) => {
    const Options = {
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userNewInfo)
    }
    try{
        return await fetch(`${baseUrl}/update/${userToUpdate._id}`, Options)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const deleteAUser = async(userToDelete) => {
    const Options = {
        method:'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userToDelete)
    }
    try{
        return await fetch(`${baseUrl}/delete/${userToDelete._id}`, Options)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const signUp = async(newUser) => {
    const Options = {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    }
    try{
        return await fetch(`${baseUrl}/signup`, Options)
        .then(res => res.json())
    }catch(e){console.log(e)}
};
 
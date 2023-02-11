const baseUrl = 'https://data-that.onrender.com/api/orders'


export const getAllOrders = async() => {
    try{
        return await fetch(`${baseUrl}`)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const getAOrderById = async(id) => {
    try{
        return await fetch(`${baseUrl}/byId/${id}`)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const getAOrderByParam = async(param) => {
    try{
        return await fetch(`${baseUrl}/byParam/${param}`)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const getHighPriceOrders = async() => {
    try{
        return await fetch(`${baseUrl}/HighPrice`)
        .then(res => res.json())
    }catch(e){console.log(e)}
}; 

export const addAOrder = async(newOrder) => {
    const Options = {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newOrder)
    }
    try{
        return await fetch(`${baseUrl}/add`, Options)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const updateAnOrder = async(orderToUpdate,OrderNewInfo) => {
    const Options = {
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(OrderNewInfo)
    }
    try{
        return await fetch(`${baseUrl}/update/${orderToUpdate._id}`, Options)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const deleteAnOrder = async(OrderToDelete) => {
    const Options = {
        method:'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(OrderToDelete)
    }
    try{
        return await fetch(`${baseUrl}/delete/${OrderToDelete._id}`, Options)
        .then(res => res.json())
    }catch(e){console.log(e)}
};
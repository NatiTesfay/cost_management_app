const baseUrl = 'https://data-that.onrender.com/api/products'

export const getAllProducts = async() => {
    try{
        return await fetch(`${baseUrl}`)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const getAProductById = async(id) => {
    try{
        return await fetch(`${baseUrl}/byId/${id}`)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const getAProductByParam = async(param) => {
    try{
        return await fetch(`${baseUrl}/${param}`)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const addAProduct = async(newProduct) => {
    const Options = {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newProduct)
    }
    try{
        return await fetch(`${baseUrl}/add`, Options)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const updateAProduct = async(productToUpdate,ProductNewInfo) => {
    const Options = {
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(ProductNewInfo)
    }
    try{
        return await fetch(`${baseUrl}/update/${productToUpdate._id}`, Options)
        .then(res => res.json())
    }catch(e){console.log(e)}
};

export const deleteAProduct = async(ProductToDelete) => {
    const Options = {
        method:'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(ProductToDelete)
    }
    try{
        return await fetch(`${baseUrl}/delete/${ProductToDelete._id}`, Options)
        .then(res => res.json())
    }catch(e){console.log(e)}
};
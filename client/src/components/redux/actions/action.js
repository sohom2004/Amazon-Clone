export const getProducts = async(dispatch)=>{
    try {
        const data = await fetch("/getproducts", {
            method:"GET",
            headers: {
                "Content-Type":"application/json"
            }
        });
        const res = await data.json();
        console.log(res);
        dispatch({type:"GET_PRODUCTS_SUCCESS", payload:res})
    } catch (error) {
        dispatch({type:"GET_PRODUCTS_FAILURE", payload:error.response})
    }
}


/**
 * @param {number} page 
 * @returns
 */


export const loadUserByPage = async(page = 1) =>{
    const url  =`${import.meta.env.VITE_BASE_URL}/user?_page=${page}`;
    const res  = await fetch(url);
    const data = await res.json();
    console.log(data)
}
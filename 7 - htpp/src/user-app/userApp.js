import userstores from "./store/user-stores";


/**
 * 
 * @param {HTMLDivElement\} element 
 */


export const UserApp = async(element)=>{
    element.innerHTML ='loading...';
    await userstores.loadNextPage();



}
import { loadUserByPage } from "../usescases/loadUsers";

const state ={
    currentPage:0,
    user: [],
}

const loadNextPage    = async() =>{
 await  loadUserByPage(state.currentPage + 1);
    
};
const previusNextPage = async() =>{
    throw new Error("no implementado");
    
};

const onUserChange    = () => {
    throw new Error("no implementado");

}
const reloadPage      = async() => {
    throw new Error("no implementado");

}

export default {
    loadNextPage,
    previusNextPage,
    onUserChange,
    reloadPage,

    getUser: () => [...state.user],
    getCurrentPage: () => state.currentpage,
}
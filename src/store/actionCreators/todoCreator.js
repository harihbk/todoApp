export const Add = (value) => {
    return (dispatch)=>{
        dispatch({
            type : 'addTodo',
            value: value
        })
    }
} 

export const Edit = (value) => {
    return (dispatch)=>{
        dispatch({
            type : 'editTodo',
            value: value
        })
    }
} 

export const Delete = (value) => {
    return (dispatch)=>{
        dispatch({
            type : 'deleteTodo',
            value: value
        })
    }
}
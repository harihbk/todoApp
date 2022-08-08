const todoReducer = (state = [] , action ) => {
    let id;
    switch (action.type) {
        case 'addTodo':
            let swpcpy = [...state]
            action.value.id = swpcpy.length + 1
            swpcpy.push(action.value)
            return swpcpy 

        case 'editTodo':
             id = action.value
            let cpy = [...state]
            let indx = cpy.findIndex(val => val.id == id )
            cpy[indx].companyname = "Edited"
            state = cpy
            return state
        
        case 'deleteTodo':
            id = action.value
            return state.filter( x => x.id != id )
    
        default:
            return state;
    }

}

export default todoReducer
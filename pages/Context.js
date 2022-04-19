import { createContext,useReducer } from 'react'

export const themecontext = createContext()

const initialstate = {dark:false}

const themereducer = (state,action) => {
    switch(action.type){
        case 'toggle':
            return {dark: !state.dark};
        default:
            return state;
    }
}

export const Themeprovider = (props)=>{
    const [state,dispatch] = useReducer(themereducer,initialstate);
    return(
        <themecontext.Provider value={{state,dispatch}}>
            {props.children}
        </themecontext.Provider>
    )
}
export default function Context(){
    return (
        <div></div>
    )
}
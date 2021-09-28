import React from 'react'

const apiReducer = (state=[],action) => {
    switch(action.type){
        case "FETCHAPI":
            return state=action.payload
        case "ERRORAPI":
            return state=action.payload
        default:
            return state
    }
}

export default apiReducer

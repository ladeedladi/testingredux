import React from 'react'
import { combineReducers } from 'redux'
import apiReducer from './apiReducer'
export const allReducer=combineReducers({api:apiReducer})

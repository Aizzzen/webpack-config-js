import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.less';
import {setCount} from '../reducers/reposReducer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Card from './card/Card';

const App = () => {
    const dispatch = useDispatch()
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/card' element={<Card/>}/>
            </Routes>
            <Navigate to='/'/>
        </BrowserRouter>
  )
}

export default App
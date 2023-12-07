import React from 'react'
import { Route, Routes } from 'react-router-dom';
import DynamicForm from '../Pages/DynamicForm';
import Submission from '../Pages/Submission';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<DynamicForm/>}></Route>
        <Route path="/submit" element={<Submission/>}></Route>
    </Routes>
  )
}

export default MainRoutes;
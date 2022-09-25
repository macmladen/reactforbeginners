import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import StorePicker from './StorePicker'
import App from './App'
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StorePicker />} />
        <Route exact path="/store/:storeId" element={<App />} />
        <Route path="*" element={<NotFound />} />
        {/*<Route path="*" element={<Navigate to="not-found" />} />*/}
      </Routes>
    </BrowserRouter>
)

export default Router
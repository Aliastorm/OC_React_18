import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRouter from './pages/Admin/AdminRouter';
import PublicRouter from './pages/Public/PublicRouter';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<PublicRouter />} />
                    <Route path="/admin/*" element={<AdminRouter />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

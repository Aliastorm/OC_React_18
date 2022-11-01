import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthGuard from './helpers/AuthGuard';
import AdminRouter from './pages/Admin/AdminRouter';
import AuthRouter from './pages/Auth/AuthRouter';
import PublicRouter from './pages/Public/PublicRouter';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<PublicRouter />} />
                    <Route
                        path="/admin/*"
                        element={
                            <AuthGuard>
                                <AdminRouter />
                            </AuthGuard>
                        }
                    />
                    <Route path="/auth/*" element={<AuthRouter />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

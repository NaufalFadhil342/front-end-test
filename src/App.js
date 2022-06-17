import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Login = React.lazy(() => import('./Components/Login/login'));
const Beranda = React.lazy(() => import('./Pages/Beranda/beranda'));
const Cabang = React.lazy(() => import('./Pages/Cabang/cabang'));
const Profil = React.lazy(() => import('./Pages/Profil/profil'));
const LaporKeluhan = React.lazy(() => import('./Components/LaporKeluhan/laporKeluhan.js'));
const KeluhanSaya = React.lazy(() => import('./Components/KeluhanSaya/keluhanSaya'));
const DetailKeluhan = React.lazy(() => import('./Components/KeluhanSaya/DetailKeluhan/detailKeluhan'));

function App() {
  return (
    <div>
      <Suspense fallback={<p style={{ textAlign: 'center', margin: '25% 0' }}>...Loading</p>}>
        <Router>
          <Routes fallback="...Loading">
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Beranda />} />
            <Route path="/report" element={<LaporKeluhan />} />
            <Route path="/myComplaint" element={<KeluhanSaya />} />
            <Route path="/detailComplaint/:id" element={<DetailKeluhan />} />
            <Route path="/branch" element={<Cabang />} />
            <Route path="/profile" element={<Profil />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;

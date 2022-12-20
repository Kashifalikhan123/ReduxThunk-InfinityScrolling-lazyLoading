import React ,{Suspense}from "react";
import { Route, Routes } from "react-router-dom";
const Page = React.lazy(() => import('./components/page/Page'));
const DetailPage = React.lazy(() => import('./components/DetailPage/DetailPage'));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    <Route path="/" element={<Page/>} />
    <Route path="/detail-Page" element={<DetailPage />} />
  </Routes>
  </Suspense>

   
  );
}

export default App;

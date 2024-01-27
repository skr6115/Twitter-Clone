
import { Routes, Route } from 'react-router';
import Homepage from '../src/page/Homepage';
import ProfilePage from './page/profilePage';
import Header from './Components/Header';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
      </>
      );
}

export default App;

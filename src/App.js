import MainPage from './components/pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/Users/LoginPage';
import ErrorPage from './components/pages/ErrorPage';
import SignUpPage from './components/pages/Users/SignUpPage';
import IntroPage from './components/pages/IntroPage'
import ChallengePage from './components/pages/Challenge/ChallengePage';
import ReviewPage from './components/pages/Review/ReviewPage';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/intro" element={<IntroPage/>}></Route>
        <Route path="/challenge" element={<ChallengePage/>}></Route>
        <Route path="/review" element={<ReviewPage/>}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

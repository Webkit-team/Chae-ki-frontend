import MainPage from './components/pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/Users/LoginPage';
import ErrorPage from './components/pages/ErrorPage';
import SignUpPage from './components/pages/Users/SignUpPage';
import IntroPage from './components/pages/IntroPage'
import ChallengePage from './components/pages/Challenge/ChallengePage';
import ReviewPage from './components/pages/Review/ReviewPage';
import MyPage from './components/pages/Users/MyPage';
import EditPage from './components/pages/Users/EditPage';
import ChallengeDetailPage from './components/pages/Challenge/ChallengeDetailPage';
import BookDetailPage from './components/pages/BookDetailPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/intro" element={<IntroPage />}></Route>
        <Route path="/challenges" element={<ChallengePage />}></Route>
        <Route path="/challenges/:id" element={<ChallengeDetailPage />} />
        <Route path="/review" element={<ReviewPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/books/:id" element={<BookDetailPage/>}></Route>
        
        {/* 마이 페이지와 회원정보수정 페이지는 로그인한 뒤에 뜨는 메인페이지에서 이동 가능하도록 변경 예정. */}
        <Route path="/my" element={<MyPage />}></Route>
        <Route path="/user" element={<EditPage />}></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

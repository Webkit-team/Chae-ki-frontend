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
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';

const App = () => {

  const [cookies] = useCookies(["user"]);
  // const uno = cookies.user ? cookies.user.uno : null;

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/intro" element={<IntroPage />}></Route>
          <Route path="/challenges" element={<ChallengePage />}></Route>
          <Route path="/challenges/:id" element={<ChallengeDetailPage />} />
          <Route path="/review" element={<ReviewPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/books/:id" element={<BookDetailPage />}></Route>

          <Route path="/my" element={<MyPage />}></Route>
          <Route path="/edit" element={<EditPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Navigation from "./components/Navbar";
import LoginComp from "./components/login/page";
import SignupComp from "./components/Signup/Signup";
import ContactUs from "./components/ContactUs/Contactus";
import ErrorPage from "./components/Error page/Error";
import Posts from "./components/Home/Posts";
import Home from "./components/Home/Home";
import PostDetail from "./components/Home/PostDetail";
import PostAuthor from "./components/Home/PostAuthor";
import AuthorPosts from "./components/Home/AuthorPosts";
import AppContextProvider from "./context/appContext";
import Post from "../src/Post/post";
function App() {
  return (
    <AppContextProvider>
      <div>
        <Router>
          {/* <Navigation /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route exact path="/ContactUs" element={<ContactUs />} />
            <Route exact path="/login" element={<LoginComp />} />
            <Route exact path="/Signup" element={<SignupComp />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/post/users/sdfsdf" element={<AuthorPosts />} />
            <Route path="/postblog" element={<Post />} />
          </Routes>
        </Router>
      </div>
    </AppContextProvider>
  );
}

export default App;

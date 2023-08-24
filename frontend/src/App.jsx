import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Diaries from "./components/diaries/Diaries";
import Auth from "./components/Auth/Auth";
import Add from "./components/diaries/Add";
import Profile from "./components/Profile/Profile";
import DiaryUpdate from "./components/diaries/DiaryUpdate";
import { authActions } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [localStorage]);
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diaries" element={<Diaries />} />
          <Route path="/auth" element={<Auth />} />
          {isLoggedIn && (
            <>
              <Route path="/add" element={<Add />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post/:id" element={<DiaryUpdate />} />{" "}
            </>
          )}
        </Routes>
      </section>
    </div>
  );
}

export default App;
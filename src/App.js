import Routes from "./routes/Routes";
import "./App.css";

import Layout from "./components/Layout/Layout";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
// import { onSnapshot } from "firebase/firestore";
import * as userActions from "./redux/user/user-action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// function onAuthStateChange(cb, action) {
//   onAuthStateChanged(auth, async (userAuth) => {
//     if (userAuth) {
//       const userRef = await createUserProfileDocument(userAuth);

//       onSnapshot(userRef, (snapShot) =>
//         cb(action({ id: snapShot.id, ...snapShot.data() }))
//       );
//     } else {
//       cb(action(null));
//     }
//   });
// }

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  // const unsuscribe = onAuthStateChange(dispatch, userActions.setCurrentUser);
  // return () => unsuscribe();
  // }, [dispatch]);
  return (
    <>
      <Layout>
        <Navbar />
        <Routes />
        <Footer />
      </Layout>
    </>
  );
}

export default App;

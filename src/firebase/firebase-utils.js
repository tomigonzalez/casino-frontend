// import { initializeApp } from "firebase/app";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   GoogleAuthProvider,
//   sendEmailVerification,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";
// import {
//   actionCodeSettingsForgotPassword,
//   actionCodeSettingsVerification,
//   firebaseConfig,
// } from "./firebase-config";
// import {
//   doc,
//   getDoc,
//   setDoc,
//   getFirestore,
//   collection,
//   addDoc,
// } from "firebase/firestore";

// const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app);
// export const auth = getAuth();

// auth.useDeviceLanguage();

// export const createUserProfileDocument = async (userAuth) => {
//   if (!userAuth || !userAuth.emailVerified) return;

//   const userRef = doc(firestore, `users/${userAuth.uid}`);
//   console.log("userRef ==> ", userRef);
//   const snapShot = await getDoc(userRef);

//   if (!snapShot.exists()) {
//     const { displayName, email, photoURL } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(doc(firestore, `users/${userAuth.uid}`), {
//         displayName: displayName || localStorage.getItem("username"),
//         email,
//         photoURL,
//         createdAt,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return userRef;
// };
// export const addToCart = async (userId, product) => {
//   const userRef = doc(firestore, `users/${userId}`);
//   const userSnapshot = await getDoc(userRef);

//   if (userSnapshot.exists()) {
//     const userData = userSnapshot.data();
//     const currentCart = userData.cart || [];
//     const updatedCart = [...currentCart, product];

//     await setDoc(userRef, { ...userData, cart: updatedCart });
//     console.log("Product added to cart:", product);
//   } else {
//     await setDoc(userRef, { cart: [product] });
//     console.log("Product added to cart:", product);
//   }
// };
// export const handleAddToCart = async (userId, productId) => {
//   await addToCart(userId, productId);
// };
// export const getCartItems = async (userId) => {
//   const userRef = doc(firestore, `users/${userId}`);
//   const userSnapshot = await getDoc(userRef);

//   if (userSnapshot.exists()) {
//     const userData = userSnapshot.data();
//     const cart = userData.cart || [];

//     return cart;
//   }

//   return [];
// };

// export const addToWallet = async (userId, amount) => {
//   const walletRef = collection(firestore, `wallets`);
//   try {
//     await addDoc(walletRef, { userId, amount });
//     console.log("Amount added to wallet:", amount);
//   } catch (error) {
//     console.error("Error adding amount to wallet:", error);
//   }
// };

// console.log("auth ==> ", auth);

// export const createUser = (email, password, displayName) =>
//   createUserWithEmailAndPassword(auth, email, password).then((userCredencial) =>
//     sendEmailVerification(
//       userCredencial.user,
//       actionCodeSettingsVerification
//     ).then(() => {
//       alert(`Mensaje de verificacion enviado al mail ${email}`);
//       localStorage.setItem("username", displayName);
//     })
//   );

// export const signInUser = (email, password) =>
//   signInWithEmailAndPassword(auth, email, password);

// export const resetPassword = (email) =>
//   sendPasswordResetEmail(auth, email, actionCodeSettingsForgotPassword).then(
//     () => alert(`Mensaje de verificacion enviado al mail ${email}`)
//   );

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => signInWithPopup(auth, provider);

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";

initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "products");

// get collection data
export const getProducts = () => {
  const data = getDocs(colRef)
    .then((snapshot) => {
      let products = [];
      snapshot.docs.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      return products;
    })
    .catch((err) => {
      console.log("errrrrrrrrrrror");
      console.log(err.message);
    });
  return data;
};

// fetching a single document (& realtime)
// const docRef = doc(db, "books", "gGu4P9x0ZHK9SspA1d9j");

// getDocs(docRef).then((doc) => {
//   console.log(doc.data(), doc.id);
// });
export const getSingleProduct = (id = "Ym5tscGZmKQc4uveCs1M") => {
  const docRef = doc(db, "products", id);

  const data = getDoc(docRef)
    .then((doc) => doc.data())
    .catch((err) => {});
  return data;
};

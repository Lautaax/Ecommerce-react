// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8tjYJfUAgvxxHwox6mK_xtkI7qgsKWxU",
    authDomain: "barbershop-lautaro.firebaseapp.com",
    projectId: "barbershop-lautaro",
    storageBucket: "barbershop-lautaro.appspot.com",
    messagingSenderId: "386154418917",
    appId: "1:386154418917:web:ffeb6544f2efc36420fa0c",
    measurementId: "G-LGTK5MBR36"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const db= getFirestore (app)

const allProducts = async() => {
    const coleccionProd = collection (db, "productos")
    const productosfs = await getDocs (coleccionProd)
    const products = productosfs.docs.map(produc=>({...produc.data(),id:produc.id}))
    return products
}

const productsById = async(id) => {
  const coleccionProd = collection (db, "productos")
  const prodindiv = doc(coleccionProd, id)
  const dataprodindiv = await getDoc (prodindiv)
  return ({...dataprodindiv.data(),id:dataprodindiv.id})
} 


const productsByCategory = async(categoria) => {
  const coleccionProd = collection (db, "productos")
  const consulta = query (coleccionProd, where("gender", "==", categoria))
  const productosfs = await getDocs (consulta)
  const products = productosfs.docs.map(produc=>({...produc.data(),id:produc.id}))
  return(products)
}

const crearOrden = async(data) => {
  const coleccionProd = collection (db, "order")
  let order = await addDoc(coleccionProd, data)
  return(order.id)
}

export {allProducts,productsById,productsByCategory, crearOrden }

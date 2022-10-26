import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import {collection, getDocs, getDoc, doc} from 'firebase/firestore';
import { db } from '../firebase';
import { useState, useEffect } from 'react';

const Crud = () => {
    const classes = useStyle();
    const [products, setProducts] = useState([])

    const productsCollection = collection(db, "products")

    const getProducts = async() => {
    const data = await getDocs(productsCollection)
      //console.log(data.docs)
      setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    useEffect(()=>{
      getProducts();
    },[])
  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <tbody>
          {products.map((product)=>(
            <tr key={product.id}>
              <td>{product.description} </td>
              <td>{product.stock} </td>

            </tr>
          ))}
        </tbody>
      </form>
    </div>
  )
}

const useStyle = makeStyles((theme) => ({
    root: {
      
    }
  }));

export default Crud

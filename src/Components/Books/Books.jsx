import { useEffect, useState } from "react"
import Book from "../book/Book"


const Books = () => {
    const [books , setBooks] =useState([])

    useEffect(()=>{
        fetch('../../../public/data/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

  return (
    <div >
      <h2 className="text-5xl font-bold text-center">Books</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {
            books.map( book => <Book key={book.bookId} book={book} ></Book>)
        }

      </div>
    </div>
  )
}

export default Books
/*
1. state to store the book.
2. useEffect.
3. fetch to load data.
4. set the data to the  books state.
*/ 
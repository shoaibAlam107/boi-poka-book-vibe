import { useLoaderData, useParams } from "react-router-dom";
import { addToReadList } from "../../add/addToDb";
import { addWishList } from "../../add/wishList";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const bookDetail = data.find((book) => book.bookId === id);
  // console.log(bookDetail);
  const {
    bookId: currentBookid,
    bookName,
    author,
    image,
    tags,
    category,
    review,
  } = bookDetail;

  const handleMarkAsRead = (id) => {
    addToReadList(id)
  };
  const handleWishList = (id)=>{
   addWishList(id)
  }
  return (
    <div>
      <h1 className="text-2xl">Book Details : {bookId}</h1>
      <br />

      <div className="flex bg-base-100 w-auto shadow-xl p-6">
        <figure className="bg-slate-500 py-4 rounded-md flex">
          <img className="w-96 h-40" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <p className="font-normal text-sm">{review}</p>
          <div className="flex justify-between items-center">
            {" "}
            tag:
            <div className="flex justify-center gap-4">
              {tags.map((tag, idx) => (
                <button key={idx} className="btn btn-xs text-green-500">
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-green-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-green-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-green-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-green-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-green-100"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={()=>handleMarkAsRead(bookId)}
              className="btn btn-outline mr-4 btn-accent"
            >
              Read
            </button>
            <button onClick={()=>handleWishList(bookId)} className="btn btn-outline btn-accent">Wish List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
/*
 */

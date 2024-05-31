import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { loading, error, data } = useFetch(
    "http://localhost:8082/api/reviews"
  );
  if (loading) {
    return <p>Loading .....</p>;
  }
  if (error) {
    return <p>Error .....</p>;
  }
  return (
    <div>
      { Array.isArray(data) && data.map((review) => (
        <div key={review.id} className="review-card">
          {
            console.log(review)
          }
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          <small>console list</small>
          <p>{review.attributes.body}</p>
          <Link to={`/details/${review.attributes.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function ReviewDetails() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    `http://localhost:8082/api/reviews/${id}`
  );
  if (loading) {
    return <p>Loading .....</p>;
  }
  if (error) {
    return <p>Error .....</p>;
  }
  // console.log(data);
  // console.log(data.attributes);
  return (
    <>
      {data && (
        <div
          className="review-card"
          style={{
            borderBottom: "2px solid var(--primary) ",
            margin: "2rem 0",
          }}
        >
          {
            // console.log(review)
          }
          <div className="rating">{data.attributes.rating}</div>
          <h2>{data.attributes.title}</h2>
          <small>console list</small>
          <p>{data.attributes.body}</p>
        </div>
      )}
    </>
  );
}

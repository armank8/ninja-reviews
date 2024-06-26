import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const REVIEWS = gql`
  query GETReviews {
    reviews {
      data {
        id
        attributes {
          title,
          rating,
          body
        }
      }
    }
  }
`;

export default function Homepage() {
  const { loading, error, data } = useQuery(REVIEWS);
  console.log(data);

  // const { loading, error, data } = useFetch(
  //   "http://localhost:8082/api/reviews"
  // );

  if (loading) return <p>Loading .....</p>;

  if (error) return <p>Error .....</p>;

  // console.log(data);
  return (
    // rest apis
    // <div>
    //   {Array.isArray(data) &&
    //     data.map((review) => (
    //       <div
    //         key={review.id}
    //         className="review-card"
    //         style={{
    //           borderBottom: "2px solid var(--primary) ",
    //           margin: "2rem 0",
    //         }}
    //       >
    //         {
    //           // console.log(review)
    //         }
    //         <div className="rating">{review.attributes.rating}</div>
    //         <h2>{review.attributes.title}</h2>
    //         <small>console list</small>
    //         <p>{review.attributes.body.substring(0, 200)}...</p>
    //         <Link to={`/details/${review.id}`}>Read More</Link>
    //       </div>
    //     ))}
    // </div>

    //  /////// graphql apis /// apollo client
    <div>
      {
        data.reviews.data.map((review) => (
          <div
            key={review.id}
            className="review-card"
            style={{
              borderBottom: "2px solid var(--primary) ",
              margin: "2rem 0",
            }}
          >
            {
              // console.log(review)
            }
            <div className="rating">{review.attributes.rating}</div>
            <h2>{review.attributes.title}</h2>
            <small>console list</small>
            <p>{review.attributes.body.substring(0, 200)}...</p>
            <Link to={`/details/${review.id}`}>Read More</Link>
          </div>
        ))}
    </div>
  );
}

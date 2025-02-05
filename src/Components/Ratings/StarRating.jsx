// import React, { useState } from "react";
// import { Rating } from "react-simple-star-rating";

// const StarRating = ({ onRatingChange,  }) => {
//     const [rating, setRating] = useState(0); // Initial rating state
    

//     const handleRating = (rate) => {
//         setRating(rate);
//         onRatingChange(rate);
//         console.log(rate);
//     };

//     return (
//         <div className="flex flex-col items-start ">
//             <h1 className="font-montserrat text-textPrimary">Movie rating</h1>
//             <div className="flex items-center">
//                 <Rating
//                     allowFraction={true}
//                     onClick={handleRating}
//                     ratingValue={rating}
//                     fillColor="gold"
//                     emptyColor="gray"
//                     SVGstyle={{ display: 'inline' }}
                    
//                 />
//                 <p className="mt-2 text-textPrimary font-montserrat ">{rating} / 5</p>
//             </div>
//         </div>
//     );
// };

// export default StarRating;

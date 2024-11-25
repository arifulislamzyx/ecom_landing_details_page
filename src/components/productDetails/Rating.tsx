import React from "react";
import { Star, StarHalf } from "lucide-react";
import { IAProduct } from "@/types/product";

interface IARating {
  singleProduct: IAProduct;
  size: number;
  isProduvtReviewRating: boolean;
  isRatings: boolean;
}
const Rating: React.FC<IARating> = ({
  singleProduct,
  size = 24,
  isProduvtReviewRating,
  isRatings,
}) => {
  const { ratings, ratingsCount } = singleProduct || "";
  return (
    <div className="flex items-center gap-1">
      {isProduvtReviewRating && (
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => {
            const isFullStar = index + 1 <= Math.floor(ratings); // Full stars
            const isHalfStar =
              index + 1 === Math.ceil(ratings) && ratings % 1 !== 0; // Half star

            return (
              <span key={index} className="text-starColor">
                {isFullStar ? (
                  <Star size={size} fill="currentColor" />
                ) : isHalfStar ? (
                  <StarHalf size={size} fill="currentColor" />
                ) : (
                  <Star size={size} />
                )}
              </span>
            );
          })}
        </div>
      )}

      {isRatings ? (
        <p className="flex items-center gap-4 text-base font-semibold text-black">
          ({ratings})
          <span className="text-primary-600">{ratingsCount} reviews</span>
        </p>
      ) : (
        <span className="text-primary-600 text-[14px]">({ratingsCount})</span>
      )}
    </div>
  );
};

export default Rating;

import React, { useState } from "react";
import { UserReview } from "@/data/userReview";
import { IAProduct } from "@/types/product";
import Rating from "./Rating";
import { Breakdown } from "@/data/ratingsBreakDown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp } from "lucide-react";

const ReviewAndRating = ({ singleProduct }: { singleProduct: IAProduct }) => {
  const { ratings, ratingsCount } = singleProduct || "";
  const [activeTab, setActiveTab] = useState("reviews");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-8">
      <div className="flex gap-8 border-b pb-2 text-sm font-medium">
        <button
          className={`${
            activeTab === "details"
              ? "text-base md:text-lg font-semibold text-primary-600 border-b-2 border-primary-600"
              : "text-base md:text-lg font-semibold hover:text-primary-600 transition-all"
          }`}
          onClick={() => handleTabClick("details")}
        >
          Details
        </button>
        <button
          className={`${
            activeTab === "reviews"
              ? "text-base md:text-lg font-semibold text-primary-600 border-b-2 border-primary-600"
              : "text-base md:text-lg font-semibold hover:text-primary-600"
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Review & Rating
        </button>
        <button
          className={`${
            activeTab === "discussion"
              ? "text-base md:text-lg font-semibold text-primary-600 border-b-2 border-primary-600"
              : "text-base md:text-lg font-semibold hover:text-primary-600"
          }`}
          onClick={() => handleTabClick("discussion")}
        >
          Discussion
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "details" && (
          <div>
            {/* Product Details */}
            <h2 className="text-lg font-bold">Product Details</h2>
            <p className="mt-2 text-gray-600">
              {singleProduct?.description ||
                "No details available for this product."}
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="w-full md:w-2/3 mt-6 md:mt-10 space-y-6">
              <div>
                <select className="border p-2 rounded">
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>
              {UserReview?.map((review, index) => (
                <div key={index} className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold">{review.user}</p>
                      <p className="text-sm text-gray-600">{review.date}</p>
                    </div>
                    <Rating
                      singleProduct={singleProduct}
                      isProduvtReviewRating
                      isRatings={false}
                      size={24}
                    />
                    <p className="mt-2 space-y-4">{review.comment}</p>
                    <p className="flex items-start gap-1 mt-4">
                      <ThumbsUp size={16} /> <span>10</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 w-full md:w-1/3">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-base">Product Review</p>
                <p className="text-base flex items-center gap-2">
                  {ratingsCount}
                  <span>reviews</span>
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        index < ratings
                          ? "text-yellow-500 fas fa-star"
                          : "text-primary-700 far fa-star"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between ">
                  <Rating
                    singleProduct={singleProduct}
                    size={24}
                    isProduvtReviewRating
                    isRatings={false}
                  />
                  <p>({ratings})</p>
                </div>
                <div className="border-b mb-4 mt-4"></div>
                {Object.entries(Breakdown).map(([star, count]) => (
                  <div key={star} className="flex items-center gap-2">
                    <p className="w-6 text-starColor">{star}★</p>
                    <div className="w-full bg-gray-200 rounded h-2">
                      <div
                        className="bg-starColor h-2 rounded"
                        style={{ width: `${(count / ratingsCount) * 100}%` }}
                      />
                    </div>
                    <p className="w-8 text-right">{count}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "discussion" && (
          <div>
            <h2 className="text-lg font-bold">Discussion</h2>
            <p className="mt-2 text-gray-600">No discussion topics yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewAndRating;

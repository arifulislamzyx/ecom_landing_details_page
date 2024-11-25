import { IAProduct } from "@/types/product";
import Image from "next/image";
import React from "react";

const ImageGallary = ({ singleProduct }: { singleProduct: IAProduct }) => {
  // const img = singleProduct?.img || "";
  // const [selectedImage, setSelectedImage] = useState(img[0]);

  return (
    <div>
      <div className="mb-4">
        <Image
          src={singleProduct?.img || ""}
          alt={singleProduct?.name}
          width={628}
          height={519}
          className="rounded-2xl"
        />
      </div>

      {/* !In the db here i have just single image, based on UI i can use multiple image using this logic  */}

      {/* <div className="flex items-center gap-4">
        {img?.map((singleImg, index) => (
          <button
            key={index}
            onClick={() => selectedImage(img)}
            className={`w-16 h-16 border-2 rounded-xl overflow-hidden ${
              selectedImage === img ? "border-primary-600" : "border-gray-300"
            }`}
          >
            <Image
              src={singleImg}
              alt="product_image"
              width={144}
              height={142}
            />
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default ImageGallary;

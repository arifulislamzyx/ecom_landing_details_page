import ProductDetails from "@/components/productDetails/ProductDetails";
import RelatedProduct from "@/components/relatedProduct/RelatedProduct";
import ProductPageSkeleton from "@/components/ui/PorductDetailSkeletor";
import { fetchProduct } from "@/redux/slice/ProductSlice";
import { AppDispatch, RootState } from "@/redux/store/Store";
import { IAProduct } from "@/types/product";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = () => {
  const router = useRouter();
  const { id, filter, from } = router.query;
  const [singleProduct, setSingleProduct] = useState<IAProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    axios(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`)
      .then((res) => {
        setSingleProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error Getting Product Details", err);
      });
  }, [id, filter]);

  const filterRelatedProduct = products.filter(
    (product: IAProduct) => product?.category === singleProduct?.category
  );

  if (
    loading ||
    products.length == 0 ||
    !singleProduct ||
    filterRelatedProduct === null
  ) {
    return <ProductPageSkeleton />;
  }

  return (
    <div>
      <ProductDetails
        filter={filter as string}
        from={from as string}
        singleProduct={singleProduct}
      />
      <RelatedProduct relatedProduct={filterRelatedProduct} />
    </div>
  );
};

export default SingleProduct;

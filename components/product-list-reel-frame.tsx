import Link from "next/link";
import { CarData } from "@/types/CarType";

export const ProductListReelFrame = ({
  id,
  modelName,
  imageUrl,
  bodyType,
  price,
  modelType, // Added modelType to the props
}: CarData) => {
  return (
    <div className="flex-col flex-shrink-0 stack-4 p-16 snap-start" style={{ width: "calc(1312px / 4)", maxWidth: "80vw" }}>
      <h3 className="font-16">{bodyType}</h3>
      <h3 className="text-lg font-16">
        <span className="font-14 font-medium">{modelName}</span> {modelType}
      </h3>
      <p className="text-sm text-gray-500 font-16">Starting at: {price}</p>     
      <img src={`${imageUrl}`} alt={`${modelName} image`} className="w-full h-auto" />
      <div className="flex-row gap-x-24 items-end">
        <div className="flex-grow flex-col justify-between">
          <Link href={`/learn/${id}`} passHref>
            <button className="button-text" data-size="small" data-color="accent">
              Learn
            </button>
          </Link>
        </div>
        <Link href={`/shop/${id}`} passHref>
          <button className="button-text" data-size='small' data-color="accent">
            Shop
          </button>
        </Link>
      </div>
    </div>
  );
};

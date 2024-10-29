// app/products/page.tsx

import { ProductListReel } from "@/components/product-list-reel";
import { CarData } from "@/types/CarType";

async function getCarsData(): Promise<CarData[]> {
  const res = await fetch("https://codility.blob.core.windows.net/tests/volvo-cars-frontend-nextjs-reel-cars.json", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch cars data");

  const cars = await res.json();

  // Ensure that imageUrl is defined and is a string
  return cars.map((car: any) => ({
    id: car.id,
    modelName: car.modelName,
    bodyType: car.bodyType,
    modelType: car.modelType,
    imageUrl: car.imageUrl ?? '', // Provide a default value if imageUrl is undefined
    price: car.price,
  })) as CarData[]; // Type assertion to CarData[]
}

export default async function ProductsPage() {
  const cars = await getCarsData();

  return (
    <div>
      <ProductListReel cars={cars} />
    </div>
  );
}

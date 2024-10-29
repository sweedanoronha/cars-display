"use client"
import { useRef } from "react";
import { useReel, useTabList, useTabPanel, UseTabPanelOptions } from "@volvo-cars/react-headless";
import { CarData } from "@/types/CarType";
import { ProductListReelFrame } from "./product-list-reel-frame";
import { IconButton } from '@volvo-cars/react-icons';
import {isMobile} from 'react-device-detect';

export function ProductListReel({ cars }: { cars: CarData[] }) {
  const reelContainerRef = useRef<HTMLDivElement>(null);
  const { indicatorCount, activeIndex, previousButtonProps, nextButtonProps } = useReel({ ref: reelContainerRef });

  const categories = ["All", ...new Set(cars?.map((car) => car.bodyType))];
  const { tabGroupState } = useTabList();

  const ScrollComponent = () => {
    if(!isMobile) {
        return (    
          <div className="flex gap-x-8 justify-end">
            <IconButton title="ScrollLeft" variant="filled" {...previousButtonProps} iconName="navigation-chevronback" />
            <IconButton title="ScrollRight" {...nextButtonProps} variant="filled" iconName="navigation-chevronforward"  />
        </div> 
        )
    }
    return (
      <div className="reel-indicators">
        {indicatorCount <= 1
          ? null
          : [...Array(indicatorCount).keys()].map((_, index) => (
              <div key={index} aria-current={activeIndex === index} />
            ))}
     </div>      
      );
  };
  
  return (
    <section id="reel-example" className="container">
      <h2 className="heading-2 text-center">Volvo Cars Reel Component</h2> <br></br>
        <div
          ref={reelContainerRef}
          className="reel overflow-x-auto flex snap-x scrollbar-none"
          tabIndex={0}
          role="group"
          aria-labelledby={`Car categories: ${categories.join(", ")}`}
        >
          {categories.map((category, index) => {
            if (index === 0) return null; // Skip "All" category
            return (
              <TabPanel
                index={index}
                state={tabGroupState}
                category={category}
                key={category}
                cars={cars}
              />
            );
          })}
        </div>
        <ScrollComponent></ScrollComponent>      
    </section>
  );
}

function TabPanel({
  index,
  state,
  category,
  cars,
}: UseTabPanelOptions & { category: string; cars: CarData[] }) {
  const { isSelected, tabPanelProps } = useTabPanel({ index, state });
  const hidden = state.selectedIndex !== 0 && !isSelected;

  const filteredProducts = cars.filter((car) => car.bodyType === category);

  return (
    <div
      {...tabPanelProps}
      className={`flex justify-center ${hidden ? "flex-grow-0" : "flex-grow"}`}
      style={{
        transition: "opacity 400ms ease-in-out",
        opacity: hidden ? 0 : 1,
      }}
      aria-hidden={state.selectedIndex === 0 ? false : tabPanelProps["aria-hidden"]}
    >
      {!hidden && filteredProducts.map((props) => (
        <ProductListReelFrame {...props} key={props.id} />
      ))}
    </div>
  );
}

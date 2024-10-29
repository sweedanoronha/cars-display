// ProductListReel.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductListReel } from '@/components/product-list-reel';
import { CarData } from '@/types/CarType';
import '@testing-library/jest-dom';

const mockCars: CarData[] = [
  { id: '1', bodyType: 'suv', modelName: 'XC90', modelType: 'Recharge', imageUrl: 'url1', price: '80,000' },
  { id: '2', bodyType: 'sedan', modelName: 'S60', modelType: 'Recharge', imageUrl: 'url2', price: '60,000' },
  { id: '3', bodyType: 'estate', modelName: 'V60', modelType: 'Recharge', imageUrl: 'url3', price: '70,000' },
];

describe('ProductListReel Component', () => {
  let reelContainer: HTMLElement;

  beforeEach(() => {
    render(<ProductListReel cars={mockCars} />);
    reelContainer = screen.getByRole('group');
  });

  it('renders all car models and the scroll buttons', () => {
    mockCars.forEach(car => {
      expect(screen.getByText(car.modelName)).toBeInTheDocument();
    });

    expect(screen.getByTitle('ScrollLeft')).toBeInTheDocument();
    expect(screen.getByTitle('ScrollRight')).toBeInTheDocument();
  });

  it('scrolls to the right when the right button is clicked', () => {
    const scrollButton = screen.getByTitle('ScrollRight');
    fireEvent.click(scrollButton);

    expect(reelContainer.scrollLeft).toBeGreaterThan(0);

    });

  it('scrolls to the left when the left button is clicked', () => {
    const scrollRightButton = screen.getByTitle('ScrollRight');
    fireEvent.click(scrollRightButton); // Scroll right first

    const scrollLeftButton = screen.getByTitle('ScrollLeft');
    fireEvent.click(scrollLeftButton);

    expect(reelContainer.scrollLeft).toBeLessThanOrEqual(0); // Check position after scroll left
  });

  it('disables scroll buttons appropriately when at the start/end of the reel', () => {
    const leftButton = screen.getByTitle('ScrollLeft');
    const rightButton = screen.getByTitle('ScrollRight');

    // Initially, left button should be disabled
    expect(leftButton).toHaveAttribute('aria-disabled', 'true');

    // Scroll right to reach end
    fireEvent.click(rightButton);

    // At the end, the right button should be disabled
    expect(rightButton).toHaveAttribute('aria-disabled', 'true');
  
  });
});

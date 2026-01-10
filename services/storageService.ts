import { Review } from '../types';

const STORAGE_KEY = 'chiris_momo_reviews';

export const getReviews = (): Review[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load reviews", error);
    return [];
  }
};

export const addReview = (review: Omit<Review, 'id' | 'date'>): Review => {
  const reviews = getReviews();
  const newReview: Review = {
    ...review,
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
  };
  
  const updatedReviews = [newReview, ...reviews];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReviews));
  return newReview;
};

export const seedInitialReviews = () => {
  const current = getReviews();
  if (current.length === 0) {
    const seeds: Review[] = [
      {
        id: 'seed1',
        customerName: 'Sarah J.',
        rating: 5,
        comment: 'Best Jhol Momo I have ever had outside of Nepal! The soup is incredibly flavorful.',
        date: new Date(Date.now() - 86400000 * 2).toISOString(),
      },
      {
        id: 'seed2',
        customerName: 'Mike T.',
        rating: 4,
        comment: 'The fried momos are crispy and delicious. A bit spicy for me, but tasty.',
        date: new Date(Date.now() - 86400000 * 5).toISOString(),
      },
       {
        id: 'seed3',
        customerName: 'Emily R.',
        rating: 5,
        comment: 'Love the C-Momo! Perfectly sticky and spicy. Will definitely come back next week.',
        date: new Date(Date.now() - 86400000 * 10).toISOString(),
      }
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeds));
  }
};
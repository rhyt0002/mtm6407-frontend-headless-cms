export const ALL_REVIEWS_API_URL = 'https://mtm6407-headless-cms-6368.onrender.com/api/Posts?populate=image';

export const SINGLE_REVIEW_API_URL = (documentId) => { 
    return `https://mtm6407-headless-cms-6368.onrender.com/api/Posts/${documentId}?populate=image`;
}
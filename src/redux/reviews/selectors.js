export const selectReviews = ({ reviews }) => reviews.items;

export const selectOwnReview = ({ reviews }) => reviews.ownReview;

export const selectIsReviewsLoading = ({ reviews }) => reviews.isLoading;

export const selectIsReviewsError = ({ reviews }) => reviews.error;

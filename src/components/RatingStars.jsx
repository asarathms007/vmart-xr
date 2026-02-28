const RatingStars = ({ rating }) => {
  return (
    <div className="flex gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${
            star <= rating
              ? "text-neonPink drop-shadow-[0_0_6px_#FF007F]"
              : "text-gray-500"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
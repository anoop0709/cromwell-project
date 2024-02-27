import "./Shimmer.css";

export const Shimmer = () => {
  const shimmerArray = [0,1,2,3,4,5]
  return (
      <div className="grid-container" data-testid="shimmer">
        {
          shimmerArray.map(( _, index) => (
            <div className="grid-item" key={index}>
            <div className="profile-details">
              <div className="profile-icons-shimm"></div>
              <div className="details-shimm"></div>
            </div>
            </div>
          ))
        }
        </div>
  );
};

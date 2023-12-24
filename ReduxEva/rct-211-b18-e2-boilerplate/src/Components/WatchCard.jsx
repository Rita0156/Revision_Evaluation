import React from "react";

const WatchCard = ({ id,avatar,nameE,category }) => {
  return (
    <div key={id} style={{textAlign:"center",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",paddingTop:"20px",paddingBottom:"20px"}} data-testid={`watch-card-wrapper-${id}`}>
      <div>
        <img style={{width:"80%",height:"200px"}} data-testid="watch-card-image" src={avatar} alt="" />
      </div>
      <div>
        <div data-testid="watch-name">{nameE}</div>
        <div data-testid="watch-category">{category}</div>
      </div>
    </div>
  );
};

export default WatchCard;
//box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

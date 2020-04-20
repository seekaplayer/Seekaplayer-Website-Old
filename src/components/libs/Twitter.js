import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
const TwitterFeed = () => {
  return (
    <>
      <div className="centerContent">
        <div className="selfCenter standardWidth">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="seekaplayer"
            autoHeight={true}
            noBorders={true}
            noScrollbar={true}
            theme="dark"
          />
        </div>
      </div>
    </>
  );
};
export default TwitterFeed;

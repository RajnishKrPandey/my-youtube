import React from 'react';
import { Link } from 'react-router-dom';
import { HomePageVideos } from '../Types';

const Card = ({ data }: { data: HomePageVideos }) => {
  return (
    <div className="w-64 h-60 flex gap-3 flex-col">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-44 w-72"
            alt="thumbnail"
          />
        </Link>
      </div>
    </div>
  );
};

export default Card;
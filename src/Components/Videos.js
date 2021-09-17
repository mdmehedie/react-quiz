import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideosList from "./hooks/useVideosList";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loding, error, videos, hasMore } = useVideosList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            )
          )}
        </InfiniteScroll>
      )}
      {!loding && videos.length === 0 && <div>No data fount</div>}
      {error && <div>There was an error</div>}
    </div>
  );
}

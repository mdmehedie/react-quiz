import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideosList(page) {
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState("");
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function fetchVideos() {
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoding(true);
        const snapshot = await get(videoQuery);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        setLoding(false);
        setError(true);
        console.log(err);
      }
    }

    fetchVideos();
  }, [page]);

  return {
    loding,
    error,
    videos,
    hasMore,
  };
}

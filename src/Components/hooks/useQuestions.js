import {
    get,
    getDatabase,
    orderByKey,
    query,
    ref,
  } from "firebase/database";
  import { useEffect, useState } from "react";
  
  export default function useQuestions(videoID) {
    const [loding, setLoding] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState("");

    useEffect(() => {
      async function fetchQuestions() {
        const db = getDatabase();
        const quizRef = ref(db, "quiz/" + videoID + "/questions");
        const quizQuery = query(
          quizRef,
          orderByKey()
        );
  
        try {
          setError(false);
          setLoding(true);
          const snapshot = await get(quizQuery);
          if (snapshot.exists()) {
            setQuestions((prevQuestions) => {
              return [...prevQuestions, ...Object.values(snapshot.val())];
            });
          }
        } catch (err) {
          setLoding(false);
          setError(true);
          console.log(err);
        }
      }
  
      fetchQuestions();
    }, [videoID]);
  
    return {
      loding,
      error,
      questions,
    };
  }
  
// components/Loading.js
import { useEffect, useState } from "react";

const Loading = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;

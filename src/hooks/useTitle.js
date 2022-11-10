import { useEffect } from "react";

const useTitle = (title) => [
  useEffect(() => {
    document.title = `Touristics  ${title}`;
  }, [title]),
];

export default useTitle;

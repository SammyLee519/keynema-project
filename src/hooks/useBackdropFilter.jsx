import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

const useBackdropFilter = () => {
  const [hasBackdropFilter, setHasBackdropFilter] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setHasBackdropFilter(window.scrollY > 50);
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return hasBackdropFilter;
};

export default useBackdropFilter;

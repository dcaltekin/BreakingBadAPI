import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosCharacters } from "../redux/charactersSlice";
import Loading from "../components/Loading";
import CharacterList from "../components/CharacterList";
import ScrollToTopPageEnd from "../components/ScrollToTopPageEnd";
import ScrollToTop from "../components/ScrollToTop";
import LoadMore from "../components/LoadMore";
function Home() {
  const isLoading = useSelector((state) => state.characters.status);

  const lastPage = useSelector((state) => state.characters.lastPage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoading === "idle") {
      dispatch(axiosCharacters());
    }
  }, [dispatch, isLoading]);

  <ScrollToTop />;

  return (
    <div>
      <CharacterList />
      <div className="p-12 text-center">
        {isLoading === "loading" && <Loading />}
        {lastPage && isLoading !== "loading" && <LoadMore />}
        {!lastPage && (
          <div>
            <ScrollToTopPageEnd />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

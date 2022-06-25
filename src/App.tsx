import { Navbar } from "./components/Navbar";
import { SearchAnimes } from "./components/SearchAnimes";
import { GlobalStyle } from "./styles/globalStyle";

export function App() {
  return (
    <>
      <Navbar />
      <SearchAnimes />
      <GlobalStyle />
    </>
  );
}

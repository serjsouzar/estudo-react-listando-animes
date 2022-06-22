import { useEffect, useState } from "react";
import { AnimeCards, Container, MainTitle } from "./styles";

interface AnimeProps {
  canonicalTitle: string;
  attributes: any;
  posterImage: any;
  small: any;
  id: number;
}

export function SearchAnimes() {
  const [animes, setAnimes] = useState<AnimeProps[]>([]);
  const [text, setText] = useState("");

  const api = "https://kitsu.io/api/edge/";

  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}`)
        .then((response) => response.json())
        .then((response) => {
          setAnimes(response.data);
          console.log(response.data);
        });
    }
  }, [text]);

  return (
    <>
      <MainTitle>Listando Animes</MainTitle>
  
      <Container>
        <input
          placeholder="Pesquise por animes"
          type="search"
          value={text}
          onChange={(text) => setText(text.target.value)}
        />
      </Container>

      <AnimeCards>
        <>
          {animes && (
            <ul className="animes-list">
              {animes.map((anime) => {
                return (
                  <>
                    <div id="li">
                    <li key={anime.id}>{anime.attributes.canonicalTitle}</li>
                    <img src={anime.attributes.posterImage.small} width={200} height={300} />
                    </div>
                  </>
                );
              })}
            </ul>
          )}
        </>
      </AnimeCards>
    </>
  );
}

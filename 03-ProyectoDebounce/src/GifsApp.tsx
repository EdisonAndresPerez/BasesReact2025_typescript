import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { Gifs } from "./gifs/components/Gifs";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gif, handleClick, handleSearch, previousText } = useGifs();

  return (
    <>
      {/* Header de mi app */}
      <CustomHeader
        title="Buscador de gifs"
        description={
          <>
            Buscador de gifs creado por{" "}
            <strong>Edison Andres Perez Martinez</strong> <br />
            En este proyecto pondremos en práctica el patrón{" "}
            <strong>debouncer</strong> <br />
            <span>
              <strong>{'{Dev/Talles}'}</strong>
            </span>
          </>
        }
      />

      {/* Barra de buscador */}
      <SearchBar onSearch={handleSearch} />

      {/* Mostrar búsquedas previas */}
      <PreviousSearches
        onHandleClick={handleClick}
        title="Búsquedas previas del usuario"
        searches={previousText}
      />

      {/* Gifs */}
      <Gifs gifs={gif} />
    </>
  );
};

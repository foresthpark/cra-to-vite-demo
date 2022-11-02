import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import GifGallery from "../components/GifGallery";
import useSearchGif from "../hooks/searchGif";

export default function Search() {
  const [searchedGifs, setSearchedGifs] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const { handleSubmit, register, reset } = useForm();
  const { data, isLoading, isError } = useSearchGif(searchTerm);
  console.log("🚀 ~ file: Search.js ~ line 9 ~ Search ~ data", data);

  const onSubmit = async (data) => {
    setSearchTerm(data.search);
    reset();
  };

  useEffect(() => {
    if (data) {
      setSearchedGifs(data);
    }
  }, [data, searchTerm]);

  return (
    <div className="h-full w-full">
      <form
        className="h-full w-full flex flex-row p-4 items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full sm:max-w-xs flex flex-row items-center justify-center">
          <label htmlFor="search" className="sr-only">
            Search Memes
          </label>
          <input
            {...register("search", { required: true })}
            className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search memes"
          />
        </div>
        <button
          type="submit"
          className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Search
        </button>
      </form>
      {searchedGifs?.length && <GifGallery gifs={searchedGifs} />}
    </div>
  );
}

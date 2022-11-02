import React from "react";
import useRandomGif from "../hooks/randomGif";

export default function RandomGif() {
  const { data, isLoading, refetch, isRefetching } = useRandomGif();

  if (isLoading || isRefetching) {
    return (
      <div className="flex flex-col p-4 items-center gap-4">
        <img
          src="https://media0.giphy.com/media/11ASZtb7vdJagM/giphy.gif?cid=ecf05e47lkjqij67lhmm75tmvj0r96nql0gvdmecq2ljadoq&rid=giphy.gif&ct=g"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 items-center gap-4">
      {data && (
        <>
          <img
            src={data.images.downsized.url}
            alt="Random Gif"
            className="w-1/3"
          />
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-medium">Uploaded by:</span>
            <img src={data.user.avatar_url} alt="" className="h-20" />
            <p>{data.user.display_name}</p>
          </div>
          <button
            onClick={refetch}
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Another one
          </button>
        </>
      )}
    </div>
  );
}

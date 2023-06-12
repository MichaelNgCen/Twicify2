"use client";

import useGetSongsById from "@/app/hooks/useGetSongById";
import useLoadSongUrl from "@/app/hooks/useLoadSongUrl";
import usePlayer from "@/app/hooks/usePlayer";
import React from "react";
import PlayerContent from "./PlayerContent";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongsById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) return null;

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
};

export default Player;

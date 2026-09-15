"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  MediaPlayer,
  MediaProvider,
  PlayButton,
  Poster,
  useMediaState,
} from "@vidstack/react";
import type { MediaPlayerInstance } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import PlayIcon from "@/assets/img/icon-play.svg";
import { twMerge } from "tailwind-merge";

import "./styles.css";

function HeroVideoPlayer({
  videoSrc,
  posterSrc,
  aspectRatio = "16/9",
  className,
}: {
  videoSrc?: string;
  posterSrc?: string;
  aspectRatio?: string;
  className?: string;
}) {
  const playerRef = useRef<MediaPlayerInstance>(null);
  const paused = useMediaState("paused", playerRef);
  const canPlay = useMediaState("canPlay", playerRef);
  const playing = useMediaState("playing", playerRef);

  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (playing) {
      setHasPlayed(true);
    }
  }, [playing]);

  if (!videoSrc) {
    return null;
  }

  return (
    <MediaPlayer
      ref={playerRef}
      title={"Hero Video"}
      poster={posterSrc}
      src={{ src: videoSrc, type: "video/mp4" }}
      className={twMerge(
        "bg-obsidian relative border-0 align-middle",
        className,
      )}
      aspectRatio={aspectRatio}
      style={{
        "--video-border-radius": "var(--radius-4xl)",
        "--video-border": "0px",
      }}
    >
      {posterSrc && (
        <Poster
          asChild
          className={twMerge(
            "absolute inset-0 z-10 flex items-center justify-center object-cover w-full h-full transition-opacity duration-300",
            hasPlayed ? "opacity-0 pointer-events-none -z-1" : "opacity-100"
          )}
        >
          <Image
            src={posterSrc}
            width={1920}
            height={1080}
            alt="Video placeholder image"
          />
        </Poster>
      )}
      {!hasPlayed && paused && canPlay && (
        <PlayButton className="group absolute top-1/2 left-1/2 z-20 block inline-flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center">
          <PlayIcon className="h-18 w-18" />
        </PlayButton>
      )}
      {hasPlayed && (
        <DefaultVideoLayout thumbnails="#" icons={defaultLayoutIcons} />
      )}
      <MediaProvider />
    </MediaPlayer>
  );
}

export default HeroVideoPlayer;

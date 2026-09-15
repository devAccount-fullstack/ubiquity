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

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import type { VideoProps } from "./types";
import PlayIcon from "@/assets/img/icon-play.svg";
import Section from "@components/common/Section";
import SectionHeader from "@components/common/SectionHeader";
import { twMerge } from "tailwind-merge";

function Video({
  heading,
  text,
  buttonText,
  buttonUrl,
  video,
  theme,
  split_theme,
  split_theme_color,
  attributes,
  poster_image,
  autoPlay = false,
  controls = true,
  muted = false,
  loop = false,
  playsInline = false,
}: VideoProps) {
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

  if (!video) {
    return null;
  }

  return (
    <Section
      name="video"
      attributes={attributes}
      theme={theme}
      className="mt-0 pt-20 lg:mt-0 lg:pt-22"
      splitThemeOn={split_theme}
      splitThemeClass=".media-container"
      splitThemeColor={split_theme_color}
    >
      <SectionHeader
        heading={heading}
        text={text}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
      />

      <div className="mx-auto w-full max-w-7xl">
        <div className="media-container relative overflow-hidden rounded-3xl">
          { video && (
            <div className="relative">
              <MediaPlayer
                ref={playerRef}
                title={heading || "Hero Video"}
                poster={poster_image}
                src={{ src: video, type: "video/mp4" }}
                className="bg-obsidian relative border-0 align-middle"
                aspectRatio={poster_image}
                autoPlay={autoPlay}
                controls={controls}
                muted={muted}
                loop={loop}
                playsInline={playsInline}
                style={{
                  "--video-border-radius": "var(--radius-4xl)",
                  "--video-border": "0px",
                }}
              >
                {poster_image && (
                  <Poster
                    asChild
                    className={twMerge(
                      "absolute inset-0 z-10 flex items-center justify-center object-cover w-full h-full transition-opacity duration-300",
                      hasPlayed ? "opacity-0 pointer-events-none -z-1" : "opacity-100"
                    )}
                  >
                    <Image
                      src={poster_image}
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

            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

export default Video;

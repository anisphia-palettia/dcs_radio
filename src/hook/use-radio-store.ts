import { create } from "zustand";
import {RADIO_URL} from "@/constants/variabel";

interface RadioState {
  isPlaying: boolean;
  audio: HTMLAudioElement | null;

  start: () => void;
  pause: () => void;
  toggle: () => void;
}

export const useRadioStore = create<RadioState>((set, get) => ({
  isPlaying: false,
  audio: null,

  start: () => {
    const oldAudio = get().audio;
    if (oldAudio) {
      oldAudio.pause();
      oldAudio.src = "";
    }
    const audio = new Audio(`${RADIO_URL}?t=${Date.now()}`);
    audio.crossOrigin = "anonymous";
    audio.preload = "none";

    audio.play().catch((err) => {
      console.error("Radio play error:", err);
    });

    set({ audio, isPlaying: true });
  },
  pause: () => {
    const audio = get().audio;
    if (!audio) return;
    audio.pause();
    set({ isPlaying: false });
  },
  toggle: () => {
    const { isPlaying, start, pause } = get();
    if (isPlaying) {
      pause();
    } else {
      start();
    }
  },
}));

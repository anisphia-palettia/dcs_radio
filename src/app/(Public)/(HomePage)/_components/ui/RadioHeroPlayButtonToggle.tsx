"use client";

import { Button } from "@/components/ui/button";
import { useRadioStore } from "@/hook/use-radio-store";
import { Pause, Play } from "lucide-react";

export function RadioHeroPlayButtonToggle() {
  const { isPlaying, toggle } = useRadioStore();

  return (
    <Button className="mt-6" onClick={toggle}>
      {isPlaying ? (
        <>
          <Pause /> Pause Radio
        </>
      ) : (
        <>
          <Play /> Play Radio
        </>
      )}
    </Button>
  );
}

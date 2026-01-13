"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRadioStore } from "@/hook/use-radio-store";
import { Pause, Play, Radio } from "lucide-react";

export function FloatingRadioPlayer() {
  const { isPlaying, toggle } = useRadioStore();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isPlaying ? (
        <Card className="shadow-lg animate-in fade-in zoom-in-95">
          <CardContent className="flex items-center gap-4">
            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <Radio className="h-6 w-6 text-primary animate-pulse" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-0.5">
                Live Radio
              </p>
              <p className="font-semibold truncate leading-tight">DCS Radio</p>
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 rounded-full"
              onClick={toggle}
            >
              <Pause className="h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Button
          size="icon"
          onClick={toggle}
          className="h-14 w-14 rounded-full shadow-lg animate-in fade-in zoom-in-95"
        >
          <Play className="h-6 w-6 ml-0.5" />
        </Button>
      )}
    </div>
  );
}

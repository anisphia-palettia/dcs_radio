import {
  TypographyH1,
  TypographyLead,
  TypographyP,
} from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Radio } from "lucide-react";
import Image from "next/image";
import { RadioHeroPlayButtonToggle } from "./ui/RadioHeroPlayButtonToggle";

export function SectionRadioHero() {
  return (
    <section className="p-4 md:p-8">
      <Card>
        <CardContent className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 items-center gap-6">
            {/* Left */}
            <div className="">
              <Badge variant="default" className="mb-4">
                <Radio className="size-3" />
                LIVE RADIO
              </Badge>
              <TypographyH1>Radio DCS</TypographyH1>
              <TypographyLead>
                Sahabat Setia Anda - DCS 1005.50 FM
              </TypographyLead>
              <TypographyP>
                Radio dakwah yang senantiasa menyajikan kajian Islam, nasihat
                keimanan, serta lantunan doa untuk menenangkan hati. Menemani
                hari-harimu dengan ilmu dan keberkahan.
              </TypographyP>
              <RadioHeroPlayButtonToggle />
            </div>
            {/* Right */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-48 w-48 rounded-xl border bg-muted flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { Switch } from "@/components/ui/switch"; // adapte le chemin si besoin

export const LocaleSelect: React.FC = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  // Le switch est "checked" si locale = "en"
  const isEnglish = locale === "en";

  const onSwitchChange = (checked: boolean) => {
    changeLocale(checked ? "en" : "fr");
  };

  return (
    <div className="flex items-center gap-2">
      <Image
        src="/flags/fr.svg"
        alt="FR"
        width={20}
        height={20}
        className={!isEnglish ? "opacity-100" : "opacity-50"}
      />
      <Switch
        checked={isEnglish}
        onCheckedChange={onSwitchChange}
        aria-label="Toggle language"
        className="data-[state=checked]:bg-green-500 bg-gray-300"
      />
      <Image
        src="/flags/gb.svg"
        alt="EN"
        width={20}
        height={20}
        className={isEnglish ? "opacity-100" : "opacity-50"}
      />
    </div>
  );
};

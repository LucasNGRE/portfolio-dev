"use client";

import Image from "next/image";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

export const LocaleSelect: React.FC = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  // Etat local pour switcher immédiatement visuellement
  const [isEnglish, setIsEnglish] = useState(locale === "en");

  // Quand la locale externe change (ex via rechargement), on sync
  useEffect(() => {
    setIsEnglish(locale === "en");
  }, [locale]);

  const onSwitchChange = (checked: boolean) => {
    setIsEnglish(checked); // changement immédiat du switch
    changeLocale(checked ? "en" : "fr"); // changer la langue (peut être async)
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

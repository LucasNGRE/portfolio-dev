"use client";

import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
import { useI18n } from "@/locales/client";

export const TapeSection = () => {
  const t = useI18n();

  // On récupère les mots traduits depuis i18n via leurs index
  const tapeWordKeys = [
    "tapeWords.0",
    "tapeWords.1",
    "tapeWords.2",
    "tapeWords.3",
    "tapeWords.4",
    "tapeWords.5",
    "tapeWords.6",
    "tapeWords.7",
    "tapeWords.8",
    "tapeWords.9",
    "tapeWords.10",
  ] as const;
  const words = tapeWordKeys.map((key) => t(key));

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

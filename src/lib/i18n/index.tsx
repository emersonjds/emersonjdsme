"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { en, type Dict } from "./locales/en";
import { pt } from "./locales/pt";
import { es } from "./locales/es";

export type Locale = "en" | "pt" | "es";

const STORAGE_KEY = "ejds:locale";

const dicts: Record<Locale, Dict> = { en, pt, es };

function getNestedValue(obj: unknown, path: string): string {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") {
      if (process.env.NODE_ENV === "development") {
        console.warn(`[i18n] key not found: "${path}"`);
      }
      return path;
    }
    current = (current as Record<string, unknown>)[part];
  }
  if (typeof current !== "string") {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[i18n] key not a string: "${path}"`);
    }
    return path;
  }
  return current;
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => undefined,
  t: (key) => key,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && (stored === "en" || stored === "pt" || stored === "es")) {
        setLocaleState(stored);
        document.documentElement.lang = stored;
      }
    } catch {
      // localStorage unavailable — keep default
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    document.documentElement.lang = next;
  }, []);

  const t = useCallback(
    (key: string): string => {
      const val = getNestedValue(dicts[locale], key);
      if (val === key && locale !== "en") {
        // Fallback to EN
        return getNestedValue(dicts.en, key);
      }
      return val;
    },
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}

export function useDict<T>(map: { en: T; pt: T; es: T }): T {
  const { locale } = useLocale();
  return map[locale];
}

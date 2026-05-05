"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { en, type Dict } from "./locales/en";
import { pt } from "./locales/pt";
import { es } from "./locales/es";

export type Locale = "en" | "pt" | "es";

const STORAGE_KEY = "ejds:locale";
const LOCALES: readonly Locale[] = ["en", "pt", "es"];

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

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // localStorage unavailable — fall through to default
  }
  return "en";
}

function subscribe(callback: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(LOCAL_EVENT, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(LOCAL_EVENT, callback);
  };
}

const LOCAL_EVENT = "ejds:locale-change";

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
  const locale = useSyncExternalStore<Locale>(
    subscribe,
    readStoredLocale,
    () => "en"
  );

  // Mirror locale into the document so screen readers announce content
  // in the right language. Runs only on the client after hydration.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore — best-effort persistence
    }
    window.dispatchEvent(new Event(LOCAL_EVENT));
  }, []);

  const t = useCallback(
    (key: string): string => {
      const val = getNestedValue(dicts[locale], key);
      if (val === key && locale !== "en") {
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

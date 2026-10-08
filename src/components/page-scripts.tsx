"use client";

import { useEffect } from "react";

/** Runs the small behaviour scripts that ship with a ported design page
 *  (drawers, reveal-on-scroll, tabs, modals, mailto forms) against the
 *  server-rendered DOM. Everything a script registers is torn down on unmount
 *  so client-side navigation and React strict mode don't stack listeners. */
export function PageScripts({ scripts }: { scripts: string[] }) {
  useEffect(() => {
    const listeners: [EventTarget, string, EventListenerOrEventListenerObject, unknown][] = [];
    const observers: IntersectionObserver[] = [];
    const timers: number[] = [];

    const proto = EventTarget.prototype;
    const nativeAdd = proto.addEventListener;
    const NativeObserver = window.IntersectionObserver;
    const nativeInterval = window.setInterval;
    const nativeTimeout = window.setTimeout;

    proto.addEventListener = function (
      this: EventTarget,
      type: string,
      fn: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ) {
      listeners.push([this, type, fn, options]);
      return nativeAdd.call(this, type, fn, options);
    } as typeof proto.addEventListener;
    window.IntersectionObserver = class extends NativeObserver {
      constructor(cb: IntersectionObserverCallback, init?: IntersectionObserverInit) {
        super(cb, init);
        observers.push(this);
      }
    };
    window.setInterval = ((...args: Parameters<typeof setInterval>) => {
      const id = nativeInterval(...args) as unknown as number;
      timers.push(id);
      return id;
    }) as typeof setInterval;
    window.setTimeout = ((...args: Parameters<typeof setTimeout>) => {
      const id = nativeTimeout(...args) as unknown as number;
      timers.push(id);
      return id;
    }) as typeof setTimeout;

    try {
      for (const code of scripts) {
        try {
          new Function(code)();
        } catch (error) {
          console.error("Page script failed", error);
        }
      }
    } finally {
      proto.addEventListener = nativeAdd;
      window.IntersectionObserver = NativeObserver;
      window.setInterval = nativeInterval;
      window.setTimeout = nativeTimeout;
    }

    return () => {
      for (const [target, type, fn, options] of listeners) {
        target.removeEventListener(type, fn, options as boolean | EventListenerOptions);
      }
      observers.forEach((observer) => observer.disconnect());
      timers.forEach((id) => {
        window.clearInterval(id);
        window.clearTimeout(id);
      });
    };
  }, [scripts]);

  return null;
}

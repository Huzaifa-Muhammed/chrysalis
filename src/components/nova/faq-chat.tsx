"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { faqs } from "@/content/concierge";
import { FaqAccordion } from "./faq-accordion";

type Message = { id: number; from: "bot" | "me" | "typing"; text?: string };

const subscribe = () => () => {};

/** False through SSR and the hydration render, true once running on the client. */
const useHydrated = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

const greeting =
  "Hello. Tap any question below and I’ll answer it. If yours isn’t here, ask us and a real person will reply.";

/**
 * The questions families ask, as a conversation. The accordion renders on the
 * server and stays the fallback until this mounts, so every answer is still in
 * the HTML for search engines and for anyone without JavaScript.
 */
export function FaqChat() {
  const hydrated = useHydrated();
  const [log, setLog] = useState<Message[]>([{ id: 0, from: "bot", text: greeting }]);
  const [answered, setAnswered] = useState<string[]>([]);
  const [asking, setAsking] = useState(false);
  const [askOffered, setAskOffered] = useState(true);
  const logRef = useRef<HTMLDivElement>(null);
  const askRef = useRef<HTMLTextAreaElement>(null);
  const nextId = useRef(1);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const held = timers.current;
    return () => held.forEach((timer) => window.clearTimeout(timer));
  }, []);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  /** Post the question, hold a typing indicator, then swap in the answer. */
  function say(question: string, answer: string) {
    const typingId = nextId.current++;
    setLog((current) => [
      ...current,
      { id: nextId.current++, from: "me", text: question },
      { id: typingId, from: "typing" },
    ]);
    timers.current.push(
      window.setTimeout(() => {
        setLog((current) =>
          current.map((message) =>
            message.id === typingId ? { ...message, from: "bot", text: answer } : message,
          ),
        );
      }, 600),
    );
  }

  function onAsk() {
    setAskOffered(false);
    setAsking(true);
    setLog((current) => [
      ...current,
      {
        id: nextId.current++,
        from: "bot",
        text: "Of course. Please type your question below and leave an email address, and one of our agents will reply to you directly.",
      },
    ]);
    timers.current.push(window.setTimeout(() => askRef.current?.focus(), 80));
  }

  function onSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const question = String(data.get("q") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    if (!question || !email) return;

    setAsking(false);
    say(question, `Thank you. Your question has been received and one of our agents will reply to ${email} as soon as possible.`);
    window.location.href =
      "mailto:concierge@chrysalis.education" +
      `?subject=${encodeURIComponent("A question about EDU Concierge")}` +
      `&body=${encodeURIComponent(`Question: ${question}\n\nReply to: ${email}\n`)}`;
  }

  if (!hydrated) return <FaqAccordion />;

  const remaining = faqs.filter((faq) => !answered.includes(faq.q));

  return (
    <div className="mt-[30px] flex w-full flex-col overflow-hidden rounded-[24px] bg-white">
      <div className="flex items-center gap-3 border-b border-nova-line px-6 py-[18px]">
        <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full bg-coral font-nova-display text-[15px] font-semibold text-white">
          EC
        </span>
        <span className="font-nova-display text-[15px] leading-[1.25] font-semibold">
          Education Concierge
          <small className="mt-0.5 block font-nova-body text-[11.5px] font-normal text-nova-muted-2">
            Answers to the questions families ask most
          </small>
        </span>
      </div>

      <div
        ref={logRef}
        aria-live="polite"
        className="flex max-h-[440px] min-h-[210px] flex-col gap-3 overflow-y-auto px-6 py-[22px] max-[680px]:max-h-none max-[680px]:px-4 max-[680px]:py-[18px]"
      >
        {log.map((message) =>
          message.from === "typing" ? (
            <div
              key={message.id}
              className="flex max-w-[78%] gap-1 self-start rounded-2xl rounded-bl-[5px] bg-nova-band px-[17px] py-[15px]"
            >
              {[0, 1, 2].map((dot) => (
                <i
                  key={dot}
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-nova-muted-2"
                  style={{ animationDelay: `${dot * 0.2}s` }}
                />
              ))}
            </div>
          ) : (
            <div
              key={message.id}
              className={`max-w-[78%] rounded-2xl px-[17px] py-[13px] text-[13.5px] leading-[1.65] ${
                message.from === "me"
                  ? "self-end rounded-br-[5px] bg-coral text-white"
                  : "self-start rounded-bl-[5px] bg-nova-band text-nova-ink-2"
              }`}
            >
              {message.text}
            </div>
          ),
        )}
      </div>

      {asking ? (
        <form onSubmit={onSend} className="flex flex-col gap-[9px] px-[18px] pb-[18px]">
          <textarea
            ref={askRef}
            name="q"
            rows={2}
            required
            placeholder="Type your question…"
            className="w-full resize-y rounded-xl border border-transparent bg-nova-band px-[13px] py-[11px] font-nova-body text-sm text-nova-ink outline-0 focus:border-coral focus:bg-white"
          />
          <div className="flex gap-[9px]">
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-xl border border-transparent bg-nova-band px-[13px] py-[11px] font-nova-body text-sm text-nova-ink outline-0 focus:border-coral focus:bg-white"
            />
            <button
              type="submit"
              className="flex-none cursor-pointer rounded-xl border-0 bg-coral px-[22px] py-[11px] font-nova-display text-sm font-semibold text-white transition-colors hover:bg-coral-dk"
            >
              Send
            </button>
          </div>
        </form>
      ) : null}

      <div
        className={`flex flex-wrap gap-2 border-t border-nova-line px-6 pt-4 pb-5 max-[680px]:px-4 ${
          asking ? "[&>button]:opacity-50" : ""
        }`}
      >
        {remaining.map((faq) => (
          <button
            key={faq.q}
            type="button"
            onClick={() => {
              setAnswered((current) => [...current, faq.q]);
              say(faq.q, faq.a);
            }}
            className="cursor-pointer rounded-full border border-nova-line bg-white px-4 py-[9px] text-left text-[12.5px] text-nova-ink-2 transition-colors hover:border-coral hover:text-coral"
          >
            {faq.q}
          </button>
        ))}
        {askOffered ? (
          <button
            type="button"
            onClick={onAsk}
            className="cursor-pointer rounded-full border border-nova-ink bg-white px-4 py-[9px] text-left font-nova-display text-[12.5px] font-semibold text-nova-ink transition-colors hover:bg-nova-ink hover:text-white"
          >
            Ask us something else →
          </button>
        ) : null}
      </div>
    </div>
  );
}

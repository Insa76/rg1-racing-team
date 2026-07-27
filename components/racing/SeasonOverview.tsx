"use client";

import {
  CheckCircle2,
  Circle,
  Clock3,
  Flag,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { SeasonData } from "@/lib/types/racing";

interface Props {
  data: SeasonData;
}

export default function SeasonOverview({ data }: Props) {
  const nextRace = data.races.find((race) => race.status === "next");

  return (
    <Section size="lg">
      <SectionTitle
        eyebrow="Championship"
        title={`Season ${data.year}`}
        description="Current championship performance and race calendar."
        display
      />

      {/* Stats */}

      <div className="mt-20 grid grid-cols-2 border-y border-white/10 lg:grid-cols-4">
        {data.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
            }}
            className="
              group
              relative
              px-5
              py-10
              md:px-8
              md:py-14
              lg:border-r
              lg:border-white/10
              last:lg:border-r-0
            "
          >
            {/* Accent */}

            <div className="absolute left-5 top-0 h-[2px] w-10 bg-primary transition-all duration-500 group-hover:w-20 md:left-8" />

            {/* Index */}

            <span className="absolute right-5 top-5 text-[10px] font-semibold tracking-[0.3em] text-white/15 md:right-8">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Value */}

            <div className="text-5xl font-black leading-none text-white md:text-6xl lg:text-7xl">
              {stat.value}
            </div>

            {/* Label */}

            <p className="mt-5 text-[10px] uppercase tracking-[0.4em] text-white/40 md:text-xs">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Race information */}

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Next Race */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="
            relative
            min-h-[420px]
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.025]
            p-8
            md:p-10
          "
        >
          {/* Background number */}

          {nextRace && (
            <div className="pointer-events-none absolute -bottom-10 -right-4 text-[13rem] font-black leading-none text-white/[0.025] md:text-[17rem]">
              {String(nextRace.round).padStart(2, "0")}
            </div>
          )}

          {/* Glow */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.45em] text-primary">
                Next Race
              </p>

              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/35">
                <Clock3 size={15} className="text-primary" />
                Upcoming
              </div>
            </div>

            {nextRace ? (
              <>
                <div className="mt-auto pt-20">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-white/40">
                    <Flag size={16} className="text-primary" />
                    Round {nextRace.round}
                  </div>

                  <h3 className="mt-5 text-4xl font-black uppercase leading-none text-white md:text-6xl">
                    {nextRace.circuit}
                  </h3>

                  <div className="mt-7 flex items-center gap-3 text-white/50">
                    <MapPin size={18} className="text-primary" />

                    <span className="text-sm uppercase tracking-[0.3em]">
                      {nextRace.country}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-1 items-center">
                <p className="text-lg text-white/40">
                  Next race to be announced.
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Calendar */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.02]
            p-8
            md:p-10
          "
        >
          <div className="flex items-end justify-between border-b border-white/10 pb-7">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-primary">
                Calendar
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase text-white md:text-3xl">
                Season Schedule
              </h3>
            </div>

            <span className="hidden text-sm text-white/30 sm:block">
              {data.races.length} Rounds
            </span>
          </div>

          <div className="mt-2">
            {data.races.map((race, index) => {
              const isFinished = race.status === "finished";
              const isNext = race.status === "next";

              const Icon = isFinished
                ? CheckCircle2
                : isNext
                  ? Clock3
                  : Circle;

              return (
                <motion.div
                  key={race.round}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className={`
                    group
                    relative
                    grid
                    grid-cols-[auto_1fr_auto]
                    items-center
                    gap-5
                    border-b
                    border-white/[0.07]
                    py-5
                    last:border-b-0
                    ${
                      isNext
                        ? "text-white"
                        : isFinished
                          ? "text-white/50"
                          : "text-white/35"
                    }
                  `}
                >
                  {/* Status */}

                  <Icon
                    size={19}
                    className={
                      isNext
                        ? "text-primary"
                        : isFinished
                          ? "text-white/40"
                          : "text-white/20"
                    }
                  />

                  {/* Circuit */}

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p
                        className={`
                          font-semibold
                          transition-colors
                          ${
                            isNext
                              ? "text-white"
                              : "group-hover:text-white/80"
                          }
                        `}
                      >
                        {race.circuit}
                      </p>

                      {isNext && (
                        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-primary">
                          Next
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/25">
                      Round {String(race.round).padStart(2, "0")}
                    </p>
                  </div>

                  {/* Country */}

                  <span className="text-right text-xs uppercase tracking-[0.25em] text-white/30">
                    {race.country}
                  </span>

                  {/* Next race accent */}

                  {isNext && (
                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-primary/80 via-primary/20 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
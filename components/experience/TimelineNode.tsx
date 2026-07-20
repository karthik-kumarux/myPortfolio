"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { Badge } from "../ui/badge";
import { TechChip } from "../ui/tech-chip";
import { Experience } from "../../types";
import {
  Building2,
  Calendar,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { cn } from "../../lib/utils";

interface TimelineNodeProps {
  experience: Experience;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  isLast: boolean;
}

export function TimelineNode({
  experience,
  index,
  isExpanded,
  onToggle,
  isLast,
}: TimelineNodeProps) {
  const isCurrent = experience.status === "current";

  return (
    <div className="relative">
      {/* Connector line segment */}
      {!isLast && (
        <div className="absolute left-[19px] top-12 bottom-0 w-px bg-border hidden md:block">
          <motion.div
            className="w-full h-full bg-accent origin-top"
            initial={{ scaleY: 0 }}
            whileHover={{ scaleY: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}

      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="relative z-10 flex-shrink-0">
          <motion.div
            className={cn(
              "w-10 h-10 rounded-full border-2 flex items-center justify-center",
              "bg-surface transition-shadow duration-300"
            )}
            style={{
              borderColor: experience.color,
              boxShadow: `0 0 0 0 ${experience.color}00`,
            }}
            whileHover={{
              boxShadow: `0 0 20px ${experience.color}40`,
              scale: 1.1,
            }}
            transition={{ duration: 0.25 }}
          >
            {isCurrent ? (
              <motion.div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: experience.color }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            ) : (
              <Building2 size={14} style={{ color: experience.color }} />
            )}
          </motion.div>
        </div>

        {/* Card */}
        <div className="flex-1 pb-8">
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={onToggle}
            className="cursor-pointer"
          >
            <GlassCard
              padding="lg"
              className={cn(
                "transition-all duration-300",
                isExpanded && "border-border-strong shadow-elevated"
              )}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-text-primary">
                      {experience.title}
                    </h3>
                    {isCurrent && (
                      <motion.div
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Badge variant="cta" size="sm">
                          <Sparkles size={10} className="mr-1" />
                          Current
                        </Badge>
                      </motion.div>
                    )}
                    {!isCurrent && (
                      <Badge variant="outline" size="sm">
                        Completed
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Building2 size={12} />
                      {experience.organization}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {experience.duration}
                    </span>
                  </div>
                </div>

                {/* Expand chevron */}
                <motion.div
                  className="flex-shrink-0 w-8 h-8 rounded-lg border border-border flex items-center justify-center"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={14} className="text-text-muted" />
                </motion.div>
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-border">
                      {/* Summary */}
                      <p className="text-sm text-text-secondary leading-relaxed mb-4">
                        {experience.summary}
                      </p>

                      {/* Color accent line */}
                      <div
                        className="w-full h-0.5 rounded-full mb-4"
                        style={{ backgroundColor: `${experience.color}30` }}
                      />

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <TechChip
                              label={skill}
                              size="sm"
                              active
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

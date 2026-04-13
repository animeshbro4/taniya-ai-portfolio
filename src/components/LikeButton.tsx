import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users } from "lucide-react";

const STORAGE_KEY = "portfolio_likes";
const USER_LIKES_KEY = "portfolio_user_likes";
const BASE_LIKES = 847; // Starting trust number
const MAX_LIKES = 11;

export default function LikeButton() {
  const [totalLikes, setTotalLikes] = useState(BASE_LIKES);
  const [userLikes, setUserLikes] = useState(0);
  const [showBurst, setShowBurst] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<number[]>([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const userStored = localStorage.getItem(USER_LIKES_KEY);
    if (stored) setTotalLikes(BASE_LIKES + parseInt(stored, 10));
    if (userStored) setUserLikes(parseInt(userStored, 10));
  }, []);

  const handleLike = () => {
    if (userLikes >= MAX_LIKES) return;

    const newUserLikes = userLikes + 1;
    const storedTotal = (totalLikes - BASE_LIKES) + 1;
    setTotalLikes(BASE_LIKES + storedTotal);
    setUserLikes(newUserLikes);
    setShowBurst(true);
    localStorage.setItem(STORAGE_KEY, String(storedTotal));
    localStorage.setItem(USER_LIKES_KEY, String(newUserLikes));

    const id = Date.now() + Math.random();
    setFloatingHearts((prev) => [...prev, id]);
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h !== id));
    }, 1200);

    setTimeout(() => setShowBurst(false), 400);
  };

  const fillPercent = Math.min(userLikes / MAX_LIKES, 1);
  const isMaxed = userLikes >= MAX_LIKES;

  const formatCount = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
    return String(n);
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 flex flex-col items-center"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Floating hearts */}
      <AnimatePresence>
        {floatingHearts.map((id) => (
          <motion.div
            key={id}
            className="pointer-events-none absolute -top-4"
            initial={{ opacity: 1, y: 0, scale: 0.6, x: Math.random() * 60 - 30 }}
            animate={{ opacity: 0, y: -100, scale: 1.4, rotate: Math.random() * 40 - 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Heart className="h-6 w-6 fill-red-500 text-red-500" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Expanded trust panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="glass mb-3 rounded-2xl px-5 py-4 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Trusted by</span>
            </div>
            <motion.p
              key={totalLikes}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-3xl font-bold text-foreground"
            >
              {formatCount(totalLikes)}
            </motion.p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              people loved this portfolio
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-red-500"
                animate={{ width: `${fillPercent * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <p className="mt-1.5 text-[9px] text-muted-foreground">
              {isMaxed ? "You've sent max love! 💜" : `Your likes: ${userLikes}/${MAX_LIKES}`}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Total likes badge */}
      <motion.div
        className="mb-1.5 flex items-center gap-1.5 rounded-full glass px-3 py-1"
        whileHover={{ scale: 1.05 }}
      >
        <Heart className="h-3 w-3 fill-red-500 text-red-500" />
        <motion.span
          key={totalLikes}
          initial={{ scale: 1.3, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-xs font-bold text-foreground"
        >
          {formatCount(totalLikes)}
        </motion.span>
      </motion.div>

      {/* Main button */}
      <motion.button
        onClick={handleLike}
        disabled={isMaxed}
        className={`group relative flex h-[72px] w-[72px] items-center justify-center rounded-full shadow-lg transition-all ${
          isMaxed
            ? "glass shadow-primary/10 cursor-default"
            : "glass shadow-primary/30 cursor-pointer hover:shadow-2xl hover:shadow-primary/40"
        }`}
        whileHover={isMaxed ? {} : { scale: 1.15 }}
        whileTap={isMaxed ? {} : { scale: 0.85 }}
        aria-label={`Like this portfolio (${userLikes}/${MAX_LIKES})`}
      >
        {/* Glow ring */}
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r="34" fill="none" stroke="hsl(265 30% 20% / 25%)" strokeWidth="2" />
          <motion.circle
            cx="36" cy="36" r="34"
            fill="none"
            stroke="hsl(265 85% 65%)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 34}`}
            animate={{ strokeDashoffset: (1 - fillPercent) * 2 * Math.PI * 34 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </svg>

        {/* Burst */}
        <AnimatePresence>
          {showBurst && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-red-500/60"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/40"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Heart icon */}
        <motion.div
          animate={showBurst ? { scale: [1, 1.6, 1], rotate: [0, -20, 20, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <Heart
            className={`h-8 w-8 transition-all duration-300 ${
              userLikes > 0
                ? "fill-red-500 text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]"
                : "text-muted-foreground group-hover:text-red-400"
            }`}
          />
        </motion.div>
      </motion.button>

      {/* Bottom label */}
      <motion.span
        className={`mt-1.5 text-[10px] font-bold uppercase tracking-widest ${isMaxed ? "text-primary" : "text-muted-foreground"}`}
        animate={isMaxed ? { scale: [1, 1.05, 1] } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {isMaxed ? "✦ Max Love ✦" : "Like My Work"}
      </motion.span>
    </motion.div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const STORAGE_KEY = "portfolio_likes";
const USER_LIKES_KEY = "portfolio_user_likes";
const MAX_LIKES = 11;

export default function LikeButton() {
  const [totalLikes, setTotalLikes] = useState(0);
  const [userLikes, setUserLikes] = useState(0);
  const [showBurst, setShowBurst] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const userStored = localStorage.getItem(USER_LIKES_KEY);
    if (stored) setTotalLikes(parseInt(stored, 10));
    if (userStored) setUserLikes(parseInt(userStored, 10));
  }, []);

  const handleLike = () => {
    if (userLikes >= MAX_LIKES) return;

    const newTotal = totalLikes + 1;
    const newUserLikes = userLikes + 1;
    setTotalLikes(newTotal);
    setUserLikes(newUserLikes);
    setShowBurst(true);
    localStorage.setItem(STORAGE_KEY, String(newTotal));
    localStorage.setItem(USER_LIKES_KEY, String(newUserLikes));

    // Add floating heart
    const id = Date.now();
    setFloatingHearts((prev) => [...prev, id]);
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h !== id));
    }, 1000);

    setTimeout(() => setShowBurst(false), 400);
  };

  const fillPercent = Math.min(userLikes / MAX_LIKES, 1);
  const isMaxed = userLikes >= MAX_LIKES;

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
    >
      {/* Floating hearts */}
      <AnimatePresence>
        {floatingHearts.map((id) => (
          <motion.div
            key={id}
            className="pointer-events-none absolute -top-2 text-red-500"
            initial={{ opacity: 1, y: 0, scale: 0.5, x: Math.random() * 40 - 20 }}
            animate={{ opacity: 0, y: -80, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Heart className="h-5 w-5 fill-red-500" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Like count badge */}
      <motion.span
        key={totalLikes}
        initial={{ scale: 1.4, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-lg font-bold text-foreground"
      >
        {totalLikes}
      </motion.span>

      {/* Main button */}
      <motion.button
        onClick={handleLike}
        disabled={isMaxed}
        className={`group relative flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-all ${
          isMaxed
            ? "glass shadow-primary/10 cursor-default"
            : "glass shadow-primary/30 cursor-pointer hover:shadow-xl hover:shadow-primary/40"
        }`}
        whileHover={isMaxed ? {} : { scale: 1.12 }}
        whileTap={isMaxed ? {} : { scale: 0.88 }}
        aria-label={`Like this portfolio (${userLikes}/${MAX_LIKES})`}
      >
        {/* Glow ring showing progress */}
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="none"
            stroke="hsl(265 30% 20% / 30%)"
            strokeWidth="2"
          />
          <motion.circle
            cx="32"
            cy="32"
            r="30"
            fill="none"
            stroke="hsl(265 85% 65%)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 30}`}
            animate={{ strokeDashoffset: (1 - fillPercent) * 2 * Math.PI * 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </svg>

        {/* Burst effect */}
        <AnimatePresence>
          {showBurst && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 2.2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>

        {/* Heart icon */}
        <motion.div
          animate={showBurst ? { scale: [1, 1.5, 1], rotate: [0, -15, 15, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <Heart
            className={`h-7 w-7 transition-all duration-300 ${
              userLikes > 0
                ? "fill-red-500 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                : "text-muted-foreground group-hover:text-red-400"
            }`}
          />
        </motion.div>
      </motion.button>

      {/* Label */}
      <span className={`text-[10px] font-bold uppercase tracking-widest ${isMaxed ? "text-primary" : "text-muted-foreground"}`}>
        {isMaxed ? "Max love!" : `${userLikes}/${MAX_LIKES}`}
      </span>
    </motion.div>
  );
}

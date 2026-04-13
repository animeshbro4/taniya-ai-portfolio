import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const STORAGE_KEY = "portfolio_likes";
const LIKED_KEY = "portfolio_has_liked";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showBurst, setShowBurst] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const hasLiked = localStorage.getItem(LIKED_KEY);
    if (stored) setLikes(parseInt(stored, 10));
    if (hasLiked === "true") setLiked(true);
  }, []);

  const handleLike = () => {
    if (liked) {
      const newLikes = Math.max(0, likes - 1);
      setLikes(newLikes);
      setLiked(false);
      localStorage.setItem(STORAGE_KEY, String(newLikes));
      localStorage.removeItem(LIKED_KEY);
    } else {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setLiked(true);
      setShowBurst(true);
      localStorage.setItem(STORAGE_KEY, String(newLikes));
      localStorage.setItem(LIKED_KEY, "true");
      setTimeout(() => setShowBurst(false), 600);
    }
  };

  return (
    <motion.button
      onClick={handleLike}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2.5 glass rounded-full px-5 py-3 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      aria-label="Like this portfolio"
    >
      <div className="relative">
        <AnimatePresence>
          {showBurst && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/30"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </AnimatePresence>
        <motion.div
          animate={liked ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${liked ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
          />
        </motion.div>
      </div>
      <span className="text-sm font-bold text-foreground">{likes}</span>
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {liked ? "Liked" : "Like"}
      </span>
    </motion.button>
  );
}

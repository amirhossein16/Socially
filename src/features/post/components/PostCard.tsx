import { useState } from "react";
import clsx from "clsx";
import { Card } from "../../../shared/ui/card/Card";
import { Avatar } from "../../../shared/ui/avatar/Avatar";

interface PostCardProps {
  author: string;
  content: string;
  time: string;
}

export function PostCard({ author, content, time }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [commented, setCommented] = useState(false);

  return (
    <Card className="p-5 space-y-4">
      {/* Header */}
      <div className="flex gap-3">
        <Avatar name={author} size="md" />

        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-text-primary">{author}</p>

            <span className="text-text-tertiary text-sm">•</span>

            <span className="text-sm text-text-secondary">{time}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <p className="text-text-primary leading-relaxed">{content}</p>

      {/* Divider */}
      <div className="border-t border-border pt-3">
        <div className="flex justify-around">
          {/* Like */}
          <button
            onClick={() => setLiked(!liked)}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
              liked
                ? "text-error bg-error/10"
                : "text-text-secondary hover:bg-border/30",
            )}
          >
            ❤️ Like
          </button>

          {/* Comment */}
          <button
            onClick={() => setCommented(!commented)}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
              commented
                ? "text-brand-main bg-brand-main/10"
                : "text-text-secondary hover:bg-border/30",
            )}
          >
            💬 Comment
          </button>
        </div>
      </div>
    </Card>
  );
}

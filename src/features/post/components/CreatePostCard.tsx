import { useState } from "react";
import { Card } from "../../../shared/ui/card/Card";
import { Avatar } from "../../../shared/ui/avatar/Avatar";
import { Button } from "../../../shared/ui/button/Button";

export function CreatePostCard() {
  const [content, setContent] = useState("");

  const isDisabled = content.trim().length === 0;

  return (
    <Card className="p-5">
      <div className="flex gap-4">
        <Avatar name="Farshad" size="md" />

        <div className="flex-1">
          <textarea
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="
              w-full
              resize-none
              bg-transparent
              text-text-primary
              placeholder:text-text-tertiary
              focus:outline-none
              min-h-[80px]
            "
          />

          <div className="flex justify-end pt-3 border-t border-border">
            <Button size="sm" disabled={isDisabled}>
              Post
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

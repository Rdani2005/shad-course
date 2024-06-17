import React from "react";
import { Badge } from "@/components/ui/badge";

const BadgePage = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="info">info</Badge>
      <Badge capitalize>capitalize</Badge>
    </div>
  );
};

export default BadgePage;

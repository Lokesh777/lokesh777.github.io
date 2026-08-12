import { Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";

export function StackTooltip({ name, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tooltip label={name} hasArrow isOpen={isOpen} onClose={() => setIsOpen(false)} placement="top">
      <span
        style={{ display: "inline-flex", alignItems: "center", cursor: "pointer" }}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {icon}
      </span>
    </Tooltip>
  );
}

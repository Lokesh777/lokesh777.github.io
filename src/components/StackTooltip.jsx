import { Tooltip } from "@chakra-ui/react";
import React, { cloneElement, useState } from "react";

export function StackTooltip({ name, icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const labeledIcon = icon
    ? cloneElement(icon, {
        "aria-hidden": true,
        focusable: "false",
        role: "presentation",
      })
    : null;

  return (
    <Tooltip label={name} hasArrow isOpen={isOpen} onClose={() => setIsOpen(false)} placement="top">
      <span
        style={{ display: "inline-flex", alignItems: "center", cursor: "default" }}
        aria-label={name}
        title={name}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {labeledIcon}
      </span>
    </Tooltip>
  );
}

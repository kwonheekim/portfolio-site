import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { lightTheme } from "../../styles/emotion-theme";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

const BaseSpan = styled.span<{ variant?: BadgeVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${lightTheme.borderRadius.md};
  border: 1px solid transparent;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
  flex-shrink: 0;
  gap: 4px;
  transition: color 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;

  & > svg {
    width: 12px;
    height: 12px;
    pointer-events: none;
  }

  &:focus-visible {
    border-color: ${lightTheme.colors.ring};
    box-shadow: 0 0 0 3px ${lightTheme.colors.ring}33;
  }

  &[aria-invalid="true"] {
    border-color: ${lightTheme.colors.destructive};
    box-shadow: 0 0 0 3px ${lightTheme.colors.destructive}33;
  }

  ${({ variant = "default" }) => {
    switch (variant) {
      case "default":
        return css`
          background-color: ${lightTheme.colors.primary};
          color: ${lightTheme.colors.primaryForeground};
          &:hover {
            background-color: ${lightTheme.colors.primary}e6;
          }
        `;
      case "secondary":
        return css`
          background-color: ${lightTheme.colors.secondary};
          color: ${lightTheme.colors.secondaryForeground};
          &:hover {
            background-color: ${lightTheme.colors.secondary}cc;
          }
        `;
      case "destructive":
        return css`
          background-color: ${lightTheme.colors.destructive};
          color: white;
          &:hover {
            background-color: ${lightTheme.colors.destructive}e6;
          }
          &:focus-visible {
            box-shadow: 0 0 0 3px ${lightTheme.colors.destructive}33;
          }
        `;
      case "outline":
        return css`
          color: ${lightTheme.colors.foreground};
          border-color: ${lightTheme.colors.border};
          &:hover {
            background-color: ${lightTheme.colors.accent};
            color: ${lightTheme.colors.accentForeground};
          }
        `;
      default:
        return "";
    }
  }}
`;

interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: BadgeVariant;
  asChild?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : BaseSpan;
    return (
      <Comp
        data-slot="badge"
        ref={ref}
        variant={asChild ? undefined : variant}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };

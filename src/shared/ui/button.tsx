import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { lightTheme } from "../../styles/emotion-theme";

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case "default":
      return css`
        background-color: ${lightTheme.colors.primary};
        color: ${lightTheme.colors.primaryForeground};
        &:hover {
          background-color: ${lightTheme.colors.primary}e6;
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
        border: 1px solid ${lightTheme.colors.border};
        background-color: ${lightTheme.colors.background};
        color: ${lightTheme.colors.foreground};
        &:hover {
          background-color: ${lightTheme.colors.accent};
          color: ${lightTheme.colors.accentForeground};
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
    case "ghost":
      return css`
        &:hover {
          background-color: ${lightTheme.colors.accent};
          color: ${lightTheme.colors.accentForeground};
        }
      `;
    case "link":
      return css`
        color: ${lightTheme.colors.primary};
        text-decoration-line: underline;
        text-underline-offset: 4px;
        &:hover {
          text-decoration-line: underline;
        }
      `;
    default:
      return css``;
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case "default":
      return css`
        height: 36px;
        padding: 8px 16px;
      `;
    case "sm":
      return css`
        height: 32px;
        padding: 12px;
        border-radius: ${lightTheme.borderRadius.md};
        gap: 6px;
      `;
    case "lg":
      return css`
        height: 40px;
        padding: 24px;
        border-radius: ${lightTheme.borderRadius.md};
      `;
    case "icon":
      return css`
        width: 36px;
        height: 36px;
        border-radius: ${lightTheme.borderRadius.md};
        padding: 0;
      `;
    default:
      return css``;
  }
};

const BaseButton = styled.button<{
  variant?: ButtonVariant;
  size?: ButtonSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  flex-shrink: 0;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: ${lightTheme.borderRadius.md};

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  & > svg {
    pointer-events: none;
    flex-shrink: 0;
  }

  & > svg:not([class*="size-"]) {
    width: 16px;
    height: 16px;
  }

  &:focus-visible {
    border-color: ${lightTheme.colors.ring};
    box-shadow: 0 0 0 3px ${lightTheme.colors.ring}33;
  }

  &[aria-invalid="true"] {
    box-shadow: 0 0 0 3px ${lightTheme.colors.destructive}33;
    border-color: ${lightTheme.colors.destructive};
  }

  ${({ variant = "default" }) => getVariantStyles(variant)}
  ${({ size = "default" }) => getSizeStyles(size)}
`;

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : BaseButton;
    return (
      <Comp
        data-slot="button"
        ref={ref}
        variant={asChild ? undefined : variant}
        size={asChild ? undefined : size}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

// Export buttonVariants for compatibility with other components
const buttonVariants = (props?: { variant?: ButtonVariant; size?: ButtonSize }) => {
  const variant = props?.variant || "default";
  const size = props?.size || "default";
  return `button-${variant}-${size}`;
};

export { Button, buttonVariants };

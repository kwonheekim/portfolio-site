import * as React from "react";
import styled from "@emotion/styled";

import { lightTheme } from "../../styles/emotion-theme";

const StyledCard = styled.div`
  background-color: ${lightTheme.colors.card};
  color: ${lightTheme.colors.cardForeground};
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: ${lightTheme.borderRadius.xl};
  border: 1px solid ${lightTheme.colors.border};
`;

const StyledCardHeader = styled.div`
  display: grid;
  auto-rows: min-content;
  grid-template-rows: auto auto;
  align-items: start;
  gap: 6px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;

  &[data-slot="card-action"] {
    grid-template-columns: 1fr auto;
  }

  & > [data-slot="card-action"] {
    grid-column: 2;
    grid-row: 1 / 3;
    align-self: start;
    justify-self: end;
  }

  & + [data-slot="card-content"] {
    padding-bottom: 24px;
  }
`;

const StyledCardTitle = styled.h4`
  line-height: 1;
  margin: 0;
  padding: 0;
`;

const StyledCardDescription = styled.p`
  color: ${lightTheme.colors.mutedForeground};
  margin: 0;
  padding: 0;
`;

const StyledCardAction = styled.div`
  grid-column: 2;
  grid-row: 1 / 3;
  align-self: start;
  justify-self: end;
`;

const StyledCardContent = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  &:last-child {
    padding-bottom: 24px;
  }
`;

const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;

  & > [data-slot="card-content"] {
    padding-top: 24px;
  }
`;

function Card({ ...props }: React.ComponentProps<"div">) {
  return <StyledCard data-slot="card" {...props} />;
}

function CardHeader({ ...props }: React.ComponentProps<"div">) {
  return <StyledCardHeader data-slot="card-header" {...props} />;
}

function CardTitle({ ...props }: React.ComponentProps<"div">) {
  return <StyledCardTitle data-slot="card-title" {...props} />;
}

function CardDescription({ ...props }: React.ComponentProps<"div">) {
  return <StyledCardDescription data-slot="card-description" {...props} />;
}

function CardAction({ ...props }: React.ComponentProps<"div">) {
  return <StyledCardAction data-slot="card-action" {...props} />;
}

function CardContent({ ...props }: React.ComponentProps<"div">) {
  return <StyledCardContent data-slot="card-content" {...props} />;
}

function CardFooter({ ...props }: React.ComponentProps<"div">) {
  return <StyledCardFooter data-slot="card-footer" {...props} />;
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};

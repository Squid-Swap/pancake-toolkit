import React from "react";
import { Link } from "react-router-dom";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  ...props
}) => {
  const isAbsoluteUrl = href.startsWith("http");
  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      {isAbsoluteUrl ? (
        <StyledMenuItem
          as="a"
          target="_blank"
          href={href}
          $isActive={isActive}
          $variant={variant}
          $statusColor={statusColor}
          {...props}
        >
          {children}
        </StyledMenuItem>
      ) : (
        <StyledMenuItem
          as={Link}
          to={href}
          $isActive={isActive}
          $variant={variant}
          $statusColor={statusColor}
          {...props}
        >
          {children}
        </StyledMenuItem>
      )}
    </StyledMenuItemContainer>
  );
};

export default MenuItem;

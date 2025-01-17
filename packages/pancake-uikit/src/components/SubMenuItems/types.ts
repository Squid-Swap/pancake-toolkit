import { FlexProps } from "../Box";

export type SubMenuItemsType = {
  label: string;
  href: string;
};

export interface SubMenuItemsProps extends FlexProps {
  items: SubMenuItemsType[];
  isDark: boolean;
  activeItem?: string;
}

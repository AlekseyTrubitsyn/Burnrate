import { ArrowsDownUpIcon, ChartDonutIcon, HomeIcon, JarIcon, ReceiptIcon } from "components/UI/Icon"

import { TNavLink } from "./types"

export const navConfig: TNavLink[] = [
  {
    href: "/",
    label: "Overview",
    icon: <HomeIcon className="size-6" />,
  },
  {
    href: "/transactions",
    label: "Transactions",
    icon: <ArrowsDownUpIcon className="size-6" />,
  },
  {
    href: "/budgets",
    label: "Budgets",
    icon: <ChartDonutIcon className="size-6" />,
  },
  {
    href: "/pots",
    label: "Pots",
    icon: <JarIcon className="size-6" />,
  },
  {
    href: "/bills",
    label: "Recurring Bills",
    icon: <ReceiptIcon className="size-6" />,
  },
]

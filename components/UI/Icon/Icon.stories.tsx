import type { Meta } from "@storybook/nextjs"

import ArrowLeftIcon from 'assets/icons/arrow-left.svg'
import ArrowsDownUpIcon from 'assets/icons/arrows-down-up.svg'
import BarbellIcon from 'assets/icons/barbell.svg'
import BookOpenTextIcon from 'assets/icons/book-open-text.svg'
import CaretDownIcon from 'assets/icons/caret-down.svg'
import CaretRightIcon from 'assets/icons/caret-right.svg'
import CaretUpIcon from 'assets/icons/caret-up.svg'
import ChartDonutIcon from 'assets/icons/chart-donut.svg'
import CheckIcon from 'assets/icons/check.svg'
import DotsIcon from 'assets/icons/dots.svg'
import EyeSlashIcon from 'assets/icons/eye-slash.svg'
import EyeIcon from 'assets/icons/eye.svg'
import FilterIcon from 'assets/icons/filter.svg'
import HomeIcon from 'assets/icons/home.svg'
import JarIcon from 'assets/icons/jar.svg'
import ListBulletsIcon from 'assets/icons/list-bullets.svg'
import MusicIcon from 'assets/icons/music.svg'
import NetworkIcon from 'assets/icons/network.svg'
import PlantIcon from 'assets/icons/plant.svg'
import ReceiptIcon from 'assets/icons/receipt.svg'
import SearchIcon from 'assets/icons/search.svg'
import ShieldIcon from 'assets/icons/shield.svg'
import SortIcon from 'assets/icons/sort.svg'
import VideoIcon from 'assets/icons/video.svg'
import WarehouseIcon from 'assets/icons/warehouse.svg'
import WarningIcon from 'assets/icons/warning.svg'
import WrenchIcon from 'assets/icons/wrench.svg'

const meta: Meta = {
  title: "Icons",
}

const icons = [
  { icon: ArrowLeftIcon, name: 'arrow-left' },
  { icon: ArrowsDownUpIcon, name: 'arrows-down-up' },
  { icon: BarbellIcon, name: 'barbell' },
  { icon: BookOpenTextIcon, name: 'book-open-text' },
  { icon: CaretDownIcon, name: 'caret-down' },
  { icon: CaretRightIcon, name: 'caret-right' },
  { icon: CaretUpIcon, name: 'caret-up' },
  { icon: ChartDonutIcon, name: 'chart-donut' },
  { icon: CheckIcon, name: 'check' },
  { icon: DotsIcon, name: 'dots' },
  { icon: EyeIcon, name: 'eye' },
  { icon: EyeSlashIcon, name: 'eye-slash' },
  { icon: FilterIcon, name: 'filter' },
  { icon: HomeIcon, name: 'home' },
  { icon: JarIcon, name: 'jar' },
  { icon: ListBulletsIcon, name: 'list-bullets' },
  { icon: MusicIcon, name: 'music' },
  { icon: NetworkIcon, name: 'network' },
  { icon: PlantIcon, name: 'plant' },
  { icon: ReceiptIcon, name: 'receipt' },
  { icon: SearchIcon, name: 'search' },
  { icon: ShieldIcon, name: 'shield' },
  { icon: SortIcon, name: 'sort' },
  { icon: VideoIcon, name: 'video' },
  { icon: WarehouseIcon, name: 'warehouse' },
  { icon: WarningIcon, name: 'warning' },
  { icon: WrenchIcon, name: 'wrench' },
]

export const Default = {
  render: () => (
    <div className="flex justify-center p-10 h-[calc(100vh-2rem)]">
      <div className="grid grid-cols-8 gap-6 max-w-3xl">
        {icons.map(({ icon: Icon, name }) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <Icon className="text-grey-900 size-6" />
            <span className="text-preset-5 text-grey-500 text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
}

export default meta

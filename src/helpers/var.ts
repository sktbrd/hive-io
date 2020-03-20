import { IWallet, IEcoItem } from '~/types/index'

/**
 * 
 * (
          typeof item.website !== 'string' ? item.website : []
        )
 */
const os = {
  web: {
    icon: ['fas', 'globe'],
    name: 'Web'
  },
  windows: {
    icon: ['fab', 'windows'],
    name: 'Windows'
  },
  macos: {
    icon: ['fab', 'apple'],
    name: 'macOS'
  },
  ios: {
    icon: ['fab', 'app-store-ios'],
    name: 'iOS'
  },
  linux: {
    icon: ['fab', 'linux'],
    name: 'Linux'
  },
  android: {
    icon: ['fab', 'android'],
    name: 'Android'
  },
  firefox: {
    icon: ['fab', 'firefox'],
    name: 'Firefox'
  },
  safari: {
    icon: ['fab', 'safari'],
    name: 'Safari'
  },
  chrome: {
    icon: ['fab', 'chrome'],
    name: 'Chrome'
  },
  extension: {
    icon: ['fas', 'puzzle-piece'],
    name: 'Extension'
  }
}

export const ECOSYSTEM: IEcoItem[] = [
  {
    id: 'splinterlands',
    name: 'Splinterlands',
    description: '',
    image: 'splinterlands.png',
    website: 'https://splinterlands.io',
    type: 'game'
  },
  {
    id: 'threespeak',
    name: '3Speak',
    description: '',
    image: 'threespeak.svg',
    website: 'https://3speak.online',
    type: 'app'
  },
  {
    id: 'peakd',
    name: 'Peakd',
    description: '',
    image: 'peakd.svg',
    website: 'https://peakd.com',
    type: 'app'
  },
  {
    id: 'esteem',
    name: 'Esteem',
    description: '',
    image: 'esteem.svg',
    website: 'https://esteem.app',
    type: 'app'
  },
  {
    id: 'steempress',
    name: 'SteemPress',
    description: '',
    image: 'steempress.svg',
    website: 'https://www.steempress.io',
    type: 'app'
  },
  {
    id: 'actifit',
    name: 'Actifit',
    description: '',
    image: 'actifit.png',
    website: 'https://actifit.io',
    type: 'app'
  },
  {
    id: 'engrave',
    name: 'Engrave',
    description: '',
    image: 'engrave.png',
    website: 'https://dblog.org',
    type: 'app'
  },
  {
    id: 'hivestem',
    name: 'hiveSTEM',
    description: '',
    image: 'hivestem.svg',
    website: 'https://stem.openhive.network',
    type: 'app'
  }
]

export const BLOCKEXPLORERS = [
  {
    id: 'hiveblocks',
    name: 'HiveBlocks',
    website: 'https://hiveblocks.com'
  }
]

export const WALLETS: IWallet[] = [
  {
    id: 'vessel',
    name: 'Vessel',
    image: 'vessel.png',
    os: [os.windows, os.macos, os.linux],
    website: 'https://github.com/netuoso/vessel/releases',
    type: 'wallet'
  },
  {
    id: 'hivewallet',
    name: 'HiveWallet',
    image: 'hivewallet.png',
    os: [os.ios, os.android],
    website: 'https://hivewallet.app',
    type: 'wallet'
  },
  {
    id: 'esteem',
    name: 'Esteem',
    image: 'esteem.svg',
    os: [os.windows, os.macos, os.linux, os.ios, os.android],
    website: 'https://esteem.app',
    type: 'wallet'
  },
  {
    id: 'keychain',
    name: 'Keychain',
    image: 'keychain.svg',
    os: [os.extension, os.firefox, os.chrome],
    website: 'https://github.com/stoodkev/hive-keychain',
    type: 'wallet'
  },
  {
    id: 'hivesigner',
    name: 'HiveSigner',
    image: 'hivesigner.svg',
    os: [os.web, os.windows, os.macos, os.linux, os.extension],
    website: 'https://https://hivesigner.com',
    type: 'wallet'
  },
  {
    id: 'peakd',
    name: 'Peakd',
    image: 'peakd.svg',
    os: [os.web],
    website: 'https://peakd.com',
    type: 'wallet'
  }
]

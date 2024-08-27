import { CheckCircle, FiletypePdf } from '@styled-icons/bootstrap'
import { Copy, Download, Envelope } from '@styled-icons/boxicons-regular'

export const EMAIL = 'ecioferraz@gmail.com'

export const INITIAL_STATE = {
  cv: { icon: <FiletypePdf />, text: 'Currículo' },
  email: { icon: <Envelope />, text: EMAIL }
}

export const ICONS = {
  email: {
    copied: <CheckCircle />,
    default: <Envelope />,
    hover: <Copy />
  },
  cv: {
    default: <FiletypePdf />,
    hover: <Download />
  }
}

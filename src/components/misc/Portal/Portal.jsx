import { createPortal } from 'react-dom'

const Portal = ({ children, domNode = document.body }) => createPortal(children, domNode)

export default Portal
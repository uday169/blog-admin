import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://www.admpath.com" target="_blank" rel="noopener noreferrer">
          Admpath
        </a>
        <span className="ms-1">&copy; 2025 admpath.com</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://youday.in" target="_blank" rel="noopener noreferrer">
          Youday
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)

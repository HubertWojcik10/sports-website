import React from 'react'

const PageSubTitle = ({subtitle, styles=''}) => {
  return (
    <div className={`${styles} text-base text-main font-semibold tracking-wide uppercase`}>
        {subtitle}
    </div>
  )
}

export default PageSubTitle
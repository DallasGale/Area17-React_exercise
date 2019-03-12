import React from "react"
import ShareGrey from '../../../static/images/icons/share.png';
import ShareRed from '../../../static/images/icons/share-red.png';
import "./styles.scss"

export const ShareIconGrey = () => {
  return <img className="icons__share  icons__share--article" src={ShareGrey} alt="Share article" />
}

export const ShareIconRed = () => {
    return <img className="icons__share  icons__share--trending" src={ShareRed} alt="Share trending article" />
}
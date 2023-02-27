import Link from 'next/link'
import React from 'react'

export default function NavItem({ href, text, active }) {
  return (
    <Link href={href} className={` nav__link ${active ? "active" : ''}`}>
        {text}
    </Link>
  )
}

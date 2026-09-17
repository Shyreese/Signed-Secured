import { useEffect } from 'react'

interface PageMeta {
  /** Full <title> text for the page. */
  title: string
  /** Meta description written specifically for this page's content. */
  description: string
}

/**
 * Sets the document title and meta description for the current page, then
 * restores the previous values on unmount so client side route changes always
 * reflect the active page. Creates the description tag if it is missing.
 */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    const previousDescription = tag.getAttribute('content')
    tag.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      if (previousDescription !== null) tag!.setAttribute('content', previousDescription)
    }
  }, [title, description])
}

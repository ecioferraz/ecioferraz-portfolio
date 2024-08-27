import { type RefObject, useCallback, useEffect, useRef } from 'react'

export function useClickOutside (onClickOutside: () => void): RefObject<HTMLDivElement> {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback((evt: MouseEvent) => {
    if ((wrapperRef.current != null) && !wrapperRef.current.contains(evt.target as Node)) {
      onClickOutside()
    }
  }, [wrapperRef, onClickOutside])

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => { document.removeEventListener('click', handleClickOutside) }
  }, [handleClickOutside])

  return wrapperRef
}

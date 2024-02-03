import { useEffect } from 'react'

export const useScrollOutside = (ref, callback) => {
    useEffect(() => {
        const onScroll = e => {
            if (ref.current && !ref.current.contains(e.target))
                callback(e)
        }
        window.addEventListener('scroll', onScroll, true)
        return () => {
            window.removeEventListener('scroll', onScroll, true)
        }
    }, [callback, ref])
}
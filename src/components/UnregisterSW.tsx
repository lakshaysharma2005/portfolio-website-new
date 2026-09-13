'use client'

import { useEffect } from 'react'

export default function UnregisterSW() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return
    navigator.serviceWorker.getRegistrations().then((regs) => {
      for (const reg of regs) void reg.unregister()
    })
  }, [])
  return null
}

import { Header } from '@/src/components/Header'
import { NavSideBar } from '@/src/components/NavSideBar'
import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<unknown>) {
    return <div>
        <Header />
        {children}
    </div>
}

import React from 'react'
import AdminSidebar from '../shared/AdminSidebar'
import { SidebarProvider } from '../ui/sidebar'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex justify-start'>
            <SidebarProvider >
                <AdminSidebar></AdminSidebar>
            </SidebarProvider>
            <main className='w-full p-8 space-y-5'>
                {children}
            </main>
        </div>
    )
}

export default Wrapper

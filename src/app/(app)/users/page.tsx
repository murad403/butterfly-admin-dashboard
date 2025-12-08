import UserTable from '@/components/shared/UserTable'
import UserStats from './UserStats'
import AdminHeader from '@/components/shared/AdminHeader'

const Users = () => {
    return (
        <div className='space-y-5'>
            <AdminHeader title='User' description='Manage Your User'></AdminHeader>
            <UserStats></UserStats>
            <UserTable></UserTable>
        </div>
    )
}

export default Users

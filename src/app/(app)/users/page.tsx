import UserTable from '@/components/shared/UserTable'
import UserStats from './UserStats'

const Users = () => {
    return (
        <div className='space-y-5'>
            <UserStats></UserStats>
            <UserTable></UserTable>
        </div>
    )
}

export default Users

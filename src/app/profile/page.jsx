'use client'
import { useSession } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';


const ProfilePage = () => {

    const { data, isPending } = useSession();
    if (isPending) {
        return <div>Loading...</div>
    }
    const user = data?.user;
    return (
        <div className='my-7'>
            <h4 className='text-center font-bold text-4xl not-md:text-2xl my-7'>My Profile</h4>
            <div className='p-10 justify-center w-md mx-auto rounded-4xl bg-base-300 space-y-3'>
                <Avatar className='size-30 mx-auto'>
                    <Avatar.Image alt={user?.name} src={user?.image}
                        referrerPolicy='no-referrer' />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <h4 className='text-center font-bold text-xl'>Name: {user?.name}</h4>
                <h4 className='text-center font-bold text-xl'>Email: {user?.email}</h4>
            <Button variant='primary' className='mt-5 w-full'>Update Profile</Button>
            </div>
        </div>
    );
};

export default ProfilePage;
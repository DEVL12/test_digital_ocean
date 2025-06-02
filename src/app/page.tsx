import { DeleteAll, FormUser } from '@/components/form';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const user = await prisma.user.findMany();

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <FormUser />
        <h1 className='text-2xl font-bold text-gray-900'>User List</h1>
        <DeleteAll />
        <div className='flow-root'>
          <ul
            role='list'
            className='divide-y divide-gray-200 dark:divide-gray-700'
          >
            {user.map((user, index) => (
              <li className='py-3 sm:py-4' key={`${index}-${user}`}>
                <div className='flex items-center space-x-4'>
                  <div className='flex-shrink-0'></div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium text-gray-900 truncate'>
                      {user.name}
                    </p>
                    <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                      {user.email}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}


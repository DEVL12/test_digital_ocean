import Image from 'next/image';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <Image
          className='dark:invert'
          src='/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />
        <Image
          src={'/usuario.png'}
          alt='usuario no es gente'
          height={130}
          width={130}
        />
        <h1 className='text-2xl'>ESTA VIVO</h1>
        <ol className='list-inside list-decimal text-sm text-center sm:text-left'>
          <li className='mb-2'>
            Si ves este mensaje Sonny, es que funcionó
            <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>
              :D
            </code>
            .
          </li>
          <li>
            Esta aplicación ha sido creada por JOSE DIAZ y esta desplegado en
            una VM de digital ocean
          </li>
        </ol>
      </main>
    </div>
  );
}


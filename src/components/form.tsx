'use client';

import { AddUser, DeleteAllUser } from '@/actions/user';
import React, { useState } from 'react';

export const FormUser = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');

  return (
    <div className='flex flex-col gap-4'>
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          Nombre
        </label>
        <input
          type='text'
          name='name'
          required
          className='mt-1 block h-[30px] w-[400px] rounded-md shadow-sm sm:text-sm border-2'
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder='Enter your name'
        />
      </div>
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          Email
        </label>
        <input
          type='email'
          name='email'
          required
          className='mt-1 block h-[30px] w-[400px] rounded-md shadow-sm sm:text-sm border-2'
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder='Enter your email'
        />
      </div>
      <div>
        <button
          type='button'
          className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={async () => {
            await AddUser(name, email);
            window.location.reload();
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export const DeleteAll = () => {
  return (
    <button
      type='button'
      className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      onClick={async () => {
        await DeleteAllUser();
        window.location.reload(); // Refresh the page after deletion
      }}
    >
      Delete All Users
    </button>
  );
};

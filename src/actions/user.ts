'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function AddUser(name: string, email: string) {
  try {
    console.log('Adding user:', name);

    const result = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    console.log('User added:', result);
    revalidatePath('/');
  } catch (error) {
    console.error('Error adding user:', error);
  }
}

export async function DeleteAllUser() {
  try {
    console.log('Deleting all users');

    const result = await prisma.user.deleteMany();

    console.log('All users deleted:', result);
    revalidatePath('/');
  } catch (error) {
    console.error('Error deleting all users:', error);
  }
}

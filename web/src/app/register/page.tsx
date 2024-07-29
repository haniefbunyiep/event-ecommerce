import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FcGoogle } from 'react-icons/fc';

export default function RegisterPage() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-xl'>Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Fullname</Label>
              <Input
                id='fullname'
                type='text'
                placeholder='Tobias Eaton'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <p className='mb-4 text-sm'>*Make Sure Your Email is Active</p>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Confirm Password</Label>
              <Input id='password' type='password' />
            </div>
            <Button type='submit' className='w-full'>
              Create an account
            </Button>
            <Button variant='outline' className='flex w-full gap-2'>
              <FcGoogle size={20} />
              Sign up with Google
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Already have an account?{' '}
            <Link href='/login' className='underline'>
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

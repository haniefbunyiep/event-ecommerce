'use client';

import { Button } from '@/components/ui/button';
import useFetchData from '@/helper/home/hooks/useFetchData';
import Spinner from '@/components/Loading';
import { useToast } from '@/components/ui/use-toast';

export default function Home() {
  const { toast } = useToast();

  const { data, loading } = useFetchData(
    process.env.NEXT_PUBLIC_API_URL as string,
  );

  if (loading)
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <Spinner />;
      </div>
    );
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <Button
        className='bg-blue-400 hover:bg-blue-600'
        onClick={() => console.log(data)}
      >
        Test
      </Button>
    </main>
  );
}

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ReactNode } from 'react';

interface SearchBarProps {
  placeholder: string;
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost';
  body?: ReactNode;
}

export default function InputWithButton(props: SearchBarProps) {
  console.log(props);
  return (
    <div className='flex w-full max-w-sm items-center gap-2 space-x-2'>
      <Input
        type='email'
        placeholder={props.placeholder}
        className='focus:border-azureBlue'
      />
      <Button
        variant={`${!props.variant ? 'default' : props.variant}`}
        className='flex h-auto w-auto items-center justify-center rounded-full p-1'
      >
        {props.body}
      </Button>
    </div>
  );
}

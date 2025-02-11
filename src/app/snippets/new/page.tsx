
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma'


const CreateSnippetpage= () => {
    async function createSnippet(formData: FormData) {
        "use server"; // Must be at the top for Next.js server actions
    
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;
            
       const snippet= await prisma.snippets.create({
            data: {
                title ,
                code
            },
        });
        console.log(snippet,"snippet created");
        redirect("/");
        
    }
  return (
    <form action={createSnippet}>
    <div>
        <Label>Title</Label>
        <Input type='text' name='title' id='title' />
    </div>
    <div>
        <Label>Code </Label>
        <Textarea name='code' id='code' />
    </div>
    <Button className='bg-black text-white mt-2' variant={'link'}>New</Button>
    
    </form>
  );
};

export default CreateSnippetpage

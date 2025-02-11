

import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import * as actions from '@/actions';
import React from 'react'

const snippetDetailpage = async ({params,}:{params:
  Promise<{id:string}>
}) => {
  const id =(await params).id;
  const snippet = await prisma.snippets.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if(!snippet) return <div>Snippet Not Found</div>

const deleteSnippet=actions.deleteSnippet.bind(null,snippet.id);

  return (
    <div className="flex flex-col gap-5">
    <div className='flex items-center justify-between'>
   <h1> {snippet?.title}</h1>
   <div className="flex items-center gap-2">
   <Link href={`/snippets/${snippet?.id}/edit`}><Button>Edit</Button></Link>
    
    <form action={deleteSnippet}>
    <Button variant={'destructive'} type='submit'>Delete</Button>
    </form>
 
    </div>
    </div>
    <pre className='bg-gray-100 p-4 rounded-lg border border-gray-200'>
      <code>{snippet?.code}</code>
    </pre>
    
    </div>
  )
}

export default snippetDetailpage

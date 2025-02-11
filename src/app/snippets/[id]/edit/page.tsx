
import React from 'react'
import EditsnippetForm from '@/components/ui/EditsnippetForm'
import { prisma } from '@/lib/prisma';

const EditPageSnippet = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = parseInt((await params).id);
    const snippet = await prisma.snippets.findUnique({
        where: {
            id: id,
        },

    });
    if (!snippet) return <h1>Snippet not found</h1>;
    
    return  <EditsnippetForm snippet={snippet}/>
    
};

export default EditPageSnippet

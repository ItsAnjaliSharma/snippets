"use client";
import { Editor } from '@monaco-editor/react';
import type { Snippets } from '@prisma/client';
import React, { useState } from 'react'
import { Button } from './button';
import { saveSnippet } from '@/actions';

const EditsnippetForm = ({ snippet }: { snippet: Snippets }) => {
  const [code, setCode] = useState(snippet.code);

  const changeEventHandler = (value: string="") => {
    setCode(value);
  }

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);

  return (
    <div className='flex flex-col gap-5 mb-3'>
      <form action={saveSnippetAction} className='flex items-center justify-between gap-5'>
        <h1 className='font-bold text-xl'>Your Code Editor:</h1>
        <Button type="submit">Save</Button>
      </form>

      <Editor
        defaultLanguage='javascript'
        defaultValue={code}
        theme='vs-dark'
        height='40vh'
        onChange={changeEventHandler}
      />
    </div>
  )
}

export default EditsnippetForm

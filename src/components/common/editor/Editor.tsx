"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function Editor() {
    const [value, setValue] = useState('');
  
    return <ReactQuill theme="snow" className='text-black dark:text-white' value={value} onChange={setValue} />;
  }
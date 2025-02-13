import { useEffect } from 'react';
import { Counter } from './Counter'
import { createClient } from '@supabase/supabase-js';

export { Page }

function Page() {
  
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}

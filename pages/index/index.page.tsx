import { useEffect } from 'react';
import { Counter } from './Counter'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export { Page }

function Page() {
  useEffect(() => {
    async function checkConnection() {
      try {
        const { data, error } = await supabase.from('products').select('*').limit(1);
    
        if (error) {
          console.error('Ошибка подключения:', error.message);
        } else {
          console.log('Подключение успешно! Получены данные:', data);
        }
      } catch (err) {
        console.error('Произошла ошибка:', err);
      }
    }
    checkConnection();
  }, [])
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

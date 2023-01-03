import './styles/global.css';

export function App() {
  return (
      <div className='w-sreen h-screen text-gray-100 bg-gray-900 flex flex-col items-center justify-center'>
        <header className='flex flex-col items-center gap-0 m-[3%]'>
          <img src="../../public/react.svg" alt="" />
          <h1 className='text-2xl font-bold'>Ignite Lab</h1>
          <p className='text-md text-gray-400'>Faca Login e comece a usar!</p>
        </header>
        
        <body>
          <div className='flex flex-col gap-3'>
            <label htmlFor="email" className='text-sm font-semibold'>Endereço de Email</label>
            <input type="text" id='email' 
              className='bg-gray-800 w-[400px] h-[45px] focus-within:ring-2 ring-offset-cyan-300 placeholder-gray-400 flex gap-10 rounded px-4 py-3 ' 
              placeholder='joaroque@example.com'/>
          </div>
        </body>

        <footer>

        </footer>

      </div>
  )
}

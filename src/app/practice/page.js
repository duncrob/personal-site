import Image from 'next/image'

export default function Home() {
  return (
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <header className='lg:py-24'>
          <h1 className='text-4xl font-bold'>Duncan Krey</h1>
          <h2 className='mt-3 text-lg font-medium'>Frontend Developer</h2>
          <p className='max-w-xs mt-4'>I am passionate about web experiences that empower the user.</p>
        </header>
        <div className='lg:py-24'>
          This is column 2
        </div>
      </div>
    </div>
  )
}

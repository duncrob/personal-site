import Experience from "../../../components/Experience"

export default function Home() {
  return (
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <header className='lg:py-24'>
          <h1 className='text-4xl font-bold'>Duncan Krey</h1>
          <h2 className='mt-3 text-lg font-medium'>Frontend Developer</h2>
          <p className='max-w-xs mt-4'>I am passionate about web experiences that empower the user.</p>
        </header>
        <main id='content' className='lg:py-24 lg:w-1/2 '>
          <section id='about' className='lg:mb-36 lg:scroll-mt-24' aria-label='About me'>
            <p className='mb-4'>
              Hello! I'm Duncan, a senior at the University of Washington. I am currently in the Informatics program as an aspiring front-end developer. I am passionate about design that empowers the user.
            </p>
            <p className='mb-4'>
              My recent experience has been working on websites for various organizations at UW. In my off time, I love enjoying coffee and going snowboarding.
            </p>
          </section>
          <section id='experience'>
            <ol>
              <Experience />
              <Experience />
            </ol>
          </section>
        </main>
      </div>
    </div>
  )
}

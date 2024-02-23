import { IoIosArrowUp } from 'react-icons/io'
import { useEffect, useState } from 'react'

function BackToTopBtn() {
  const [backToTopBtn, setBackToTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setBackToTopBtn(true) : setBackToTopBtn(false)
    })
  }, [])

  function handleScrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    backToTopBtn && (
      <button
        onClick={handleScrollUp}
        className="flex h-10 w-10 items-center justify-center  rounded-full bg-white text-xl text-zinc-700 shadow-md transition ease-in hover:scale-110 hover:bg-orange-400 hover:shadow-lg sm:h-[4rem] sm:w-[4rem] sm:text-3xl"
      >
        <IoIosArrowUp />
      </button>
    )
  )
}

export default BackToTopBtn

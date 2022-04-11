import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  const handleBackClick = () => {
    router.push('signup')
  }

  return <button onClick={handleBackClick}>회원가입 하러가기</button>
}

export default Home

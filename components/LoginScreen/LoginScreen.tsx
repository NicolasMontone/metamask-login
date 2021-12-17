import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

import { useMoralis } from 'react-moralis'

import { randomNumber } from '../../lib/utils'

const LoginScreen = () => {
  const { authenticate } = useMoralis()
  const [imageTroll, setImageTroll] = useState<number>()

  useEffect(() => {
    setImageTroll(randomNumber)
  }, [])

  const handleButtonClick = useCallback(() => {
    authenticate()
  }, [authenticate])
  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          src="/Icons/metamask.png"
          width={200}
          height={200}
          className="rounded-lg object-cover"
        />

        <button
          className="bg-blue-500 rounded-lg font-bold animate-pulse p-5"
          onClick={handleButtonClick}
        >
          Login with metamask
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src={imageTroll === 4 ? '/Login/troll.gif' : '/Login/login.jpeg'}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </div>
  )
}

export default LoginScreen

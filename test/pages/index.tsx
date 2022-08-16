import type { NextPage } from 'next'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { Cookies } from 'next/dist/server/web/spec-extension/cookies'
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter()
  const cookies = new Cookies()
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const inputId = (e:any) => {
    setId(e.target.value)
  }
  const inputPw = (e:any) => {
    setPw(e.target.value)
  }
  const testApi = async () => {
    let data = {
      email: id,
      password: pw
    }
    await axios.post('https://dev-admin.luxon.run/auth/login', data).then((res) => {
      cookies.set('token', res.data.data.authToken)
      console.log(cookies.get('token'))
      router.push('/content')
    }).catch(() => {
      console.log('miss input')
    })
  }
  return (
    <div className={styles.box}>
      <input onChange={inputId} type="text" placeholder='input Id' className={styles.input} />
      <input onChange={inputPw} type="text" placeholder='input Pw' className={styles.input} />
      <button onClick={testApi} className='btn'>submit</button>
    </div>
  )
}

export default Home

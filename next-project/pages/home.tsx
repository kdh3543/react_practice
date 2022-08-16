import { useState, useEffect } from 'react'

export default function Example() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 같은 방식으로
  useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// import { useEffect, useState } from 'react'
// import LoginCss from '../styles/Member.module.css'
// import {
//   Input,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   Button,
//   Link,
//   NextLink
// } from '@chakra-ui/react'

// export default function Home() {
//   const [inputId, setInputId] = useState('')
//   const [inputPw, setInputPw] = useState('')
//   const submit = () => {
//     console.log(inputId, ' : ', inputPw)
//     setInputId('')
//     setInputPw('')
//   }
//   const writeId = (e: any) => {
//     setInputId(e.target.value)
//   }
//   const writePw = (e: any) => {
//     setInputPw(e.target.value)
//   }
  
//   return (
//     <div className={LoginCss.loginBox}>
//       <FormControl >
//         <FormLabel>login system</FormLabel>
//         <Input value={inputId} placeholder='input your ID' onChange={writeId}/>
//         <FormErrorMessage>input ID</FormErrorMessage>
//         <Input type='password' value={inputPw} placeholder='input your PW' onChange={writePw}/>
//         <FormErrorMessage>input PW</FormErrorMessage>
//         <FormHelperText>input your information</FormHelperText>
//         <Button colorScheme='teal' size='sm' onClick={submit}>login</Button>
//           <Link colorScheme='teal' size='sm' isExternal>sign up</Link>
//       </FormControl>
//     </div>
//   )
// }

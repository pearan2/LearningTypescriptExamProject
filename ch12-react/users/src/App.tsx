import React, {useState, useEffect} from 'react';
import { getDataPromise } from './getDataPromise';
import { IUser } from './IUser';

// JSX(JavaScript XML) 이란?
// 페이스북이 만든 간단한 프로그래밍 언어이다.
// JSX 언어는 자바스크립트의 확장 기능 형태로 동작합니다. 
// 보통 JSX 코드가 있는 잦바스크립트 파일은 확장자를 .jsx 로 사용합니다.
// 그런데 개발 언어가 타입스크립트면 .tsx 로 사용합니다.
// App.tsx 파일의 확장자가 .ts 가 아닌 것은 이 내용이 반영된 결과입니다.
// JSX 코드가 있는 파일은 반드시 첫줄에 React 라는 심벌을 import 문으로 불러오는 코드가 있어야 합니다.

// JSX 코드는 아무 곳에서나 사용 할 수 없고, 리액트가 컴포넌트 라고 부르는 함수의 반환값으로만 사용 할 수 있습니다.
// App 이 컴포넌트의 한 예 인데, 이 함수는 JSX 코드를 반환합니다. 보통 JSX 코드는 컴파일러를 혼란스럽게 하지 않도록
// 소괄호 () 로 감싸줍니다.

const App: React.FC = () => {
  const limit = 1
  const [skip, setSkip] = useState(0)
  const [users, setUsers] = useState<IUser[]>([])
  const onClick = () => {
    getDataPromise((receivedUsers: IUser[]) => {
      setSkip(skip + limit)
      setUsers([...users, ...receivedUsers])
    })(skip, limit)
  }
  useEffect(onClick, [])

  return (
    <div className='App'>
      <p><button onClick={onClick}>more data...</button></p>
      <p>{JSON.stringify(users)}</p>
    </div>
  )



  // third
  // const [users, setUsers] = useState<IUser[]>([])
  // useEffect(()=> {
  //   getDataPromise((receivedUsers: IUser[]) => {
  //     setUsers([...users, ...receivedUsers])
  //   })(0, 1)
  // }, [])
  // return (
  //   <div className='App'>{JSON.stringify(users)}</div>
  // )

  //second
  // getDataPromise((users: IUser[]) => console.log('users', users))(0, 1)
  // return (
  //   <div className='App'>please open console window!</div>
  // )

  //first
  // const user = {name: 'Jack', age:32}
  // return (
  //   <div className='App'>{
  //     JSON.stringify(user)
  //   }</div>
  // )
}

export default App;

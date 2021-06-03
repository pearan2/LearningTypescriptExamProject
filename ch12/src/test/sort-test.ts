/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sort-test.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/03 13:18:14 by honlee            #+#    #+#             */
/*   Updated: 2021/06/03 13:35:49 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import { connect } from '../mongodb/connect'

// 컬렉션에 문서 개수가 많아지면 검색시간이 느려지는데, 이를 방지하기 위해 컬렉션에 인덱스(index)를 만들게 됩니다.
// 인덱스는 컬렉션 객체의 createIndex 메서드를 사용해 만들 수 있으며, 인덱스 항목은 당므철머 속성 이름에
// 오름차순정렬일땐 1을, 내림차순 정렬일땐 -1 을 사용합니다.

const sortTest = async() => {
	let connection
	try {
		connection = await connect()
		const db = await connection.db('ch12')
		const personsCollection = db.collection('persons')
		
		await personsCollection.createIndex({name: 1, age: -1})			//	 속도를 빠르게 하기 위해서 인덱싱
		await personsCollection.deleteMany({})
		await personsCollection.insertMany([
		 	{name:'Jack', age:32} , {name: 'Jack', age:33} , {name: 'Jane'}
		 ])

		const cursor = personsCollection.find({name:'Jack'}).sort({age: -1})
		const result = await cursor.toArray()
		console.log(result)
	} catch (e) {
		console.log(e.message)
	} finally {
		connection.close()
	}
}

sortTest()
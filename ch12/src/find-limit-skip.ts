/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   find-limit-skip.ts                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/03 13:48:32 by honlee            #+#    #+#             */
/*   Updated: 2021/06/03 13:55:33 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import { connect } from './mongodb/connect'
import { IFake } from './fake'

// 이제 데이터가 DB 에 정상적으로 저장되었는지 확인해 보겠습니다. 그런데 10만건이나 되는 데이터를 find({}) 형태로
// 찾는 것은 문제가있습니다. find 메서드는 이런 상황에 대응하도록 검색된 데이터의 개수를 제한하는 limit 메서드를
// 제공합니다. 또한 페이징(paging) 등의 기능을 할 수 있도록 검색된 결과의 앞 N 번째를 거를 수 있게 해주는
// skip 메서드도 제공합니다. 
// 다음 코드는 검색된 결과 중에서 100번째 부터 다섯개의 건수만 선택하는 예 입니다.
// let cursor = await usersCollection.find({}).sort({birthday:-1, name:1}).skip(100),limit(5)

const findLimitSkip = async(numberOfSkip:number, numberOfLimit:number) => {
	let connection, cursor
	try {
		connection = await connect()
		const db = await connection.db('ch12')
		const usersCollection = db.collection('users')
		
		let cursor = await usersCollection.find({}).sort({birthday:-1, name:1}).skip(numberOfSkip).limit(numberOfLimit)
		let result = await cursor.toArray()
		console.log(result.map((user: IFake) => (
			{name: user.name, birthday: user.birthday}
		)))
	} catch (e) {
		console.log(e.message)
	} finally {
		connection.close()
	}
}

findLimitSkip(100, 2)
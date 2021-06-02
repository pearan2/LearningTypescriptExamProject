/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   collection-test.ts                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/03 00:27:58 by honlee            #+#    #+#             */
/*   Updated: 2021/06/03 00:30:09 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { connect } from '../mongodb/connect'

const makeCollectionsTest = async() => {
	let connection
	try {
		connection = await connect()
		const db = await connection.db('ch12')
		const personCollection = db.collection('persons')
		const addressCollection = db.collection('addresses')
		console.log(personCollection, addressCollection)
	} catch (e) {
		console.log(e.message)
	} finally {
		connection.close()
	}
}

makeCollectionsTest()
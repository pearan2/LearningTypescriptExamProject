/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   insert-csv-to-mongo.ts                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/03 13:41:35 by honlee            #+#    #+#             */
/*   Updated: 2021/06/03 13:47:21 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import { connect } from './mongodb/connect'
import { getFileNameAndNumber } from './utils/getFileNameAndNumber'
import { csvFileReadGenerator } from './csv/csvFileReadGenerator'

const insertCsvToMongo = async(csvFilename, collectionName, index) => {
	let connection
	try {
		connection = await connect()
		const db = await connection.db('ch12')
		const collection = db.collection(collectionName)
		await collection.deleteMany({})
		await collection.createIndex(index)
		
		let line = 1
		for (let object of csvFileReadGenerator(csvFilename)) {
			await collection.insertOne(object)
			console.log(`${line++} inserted`)
		}
		console.log('\n insert complete.')

	} catch (e) {
		console.log(e.message)
	} finally {
		connection.close()
	}
}

const [filename] = getFileNameAndNumber('./data/fake-100000.csv', 1)
insertCsvToMongo(filename, 'users', {birthday:-1, name:1})
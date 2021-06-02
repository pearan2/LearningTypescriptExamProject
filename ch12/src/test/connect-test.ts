/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   connect-test.ts                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 19:46:37 by honlee            #+#    #+#             */
/*   Updated: 2021/06/03 00:19:22 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import MongoClient from 'mongodb'

// const connectTest = async() => {
// 	let connection
// 	try {
// 		connection = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser:true, useUnifiedTopology:true })
// 		console.log('connection OK.', connection)
// 	} catch(e) {
// 		console.log(e.message)
// 	} finally {
// 		connection.close()
// 	}
// }

// connectTest()

import { connect } from '../mongodb/connect'

const connectTest = async() => {
	let connection
	try {
		connection = await connect()
		console.log('connection OK.', connection)
	} catch(e) {
		console.log(e.message)
	} finally {
		connection.close()
	}
}

connectTest()
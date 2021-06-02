/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   deleteFile-test.ts                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 14:20:21 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 14:23:03 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { deleteFile } from '../fileApi/deleteFile'
import { rmdir } from '../fileApi/rmdir'

const deleteTest = async(filename:string) => {
	const result = await deleteFile(filename)
	console.log(`delete : ${filename}`)
}

Promise.all([deleteTest['./data/hello.txt'] ,deleteTest['./data/test.json']])
	.then(s => rmdir('./data'))
	.then(s => console.log('delete clear!!'))
	.catch((error:Error) => console.log(error.message))
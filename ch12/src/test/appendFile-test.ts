/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   appendFile-test.ts                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 14:10:01 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 14:13:05 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { appendFile } from '../fileApi/appendFile'

const appendTest = async(filename:string, data:any) => {
	const result = await appendFile(filename, data)
	console.log(`append data : ${data} to filename: ${filename}`)
}

appendTest('./data/hello.txt', '\nmore hello!!')
	.then(s => console.log('success'))
	.catch((e : Error) => console.log(e.message))
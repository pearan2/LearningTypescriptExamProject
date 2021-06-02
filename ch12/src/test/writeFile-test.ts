/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   writeFile-test.ts                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 13:21:35 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 13:42:42 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as path from 'path'
import { writeFile } from '../fileApi/writeFile'
import { mkdir } from '../fileApi/mkdir'

const writeTest = async(filename:string, data:any) => {
	const result = await writeFile(filename, data)
	console.log(`write ${result} to ${filename}`)
}

mkdir('./data')
	.then(s => writeTest('./data/hello.txt', 'hello world'))
	.then(s => writeTest('./data/test.json', JSON.stringify({name: 'Jack', age: 32}, null, 2)))
	.catch((e : Error) => console.log(e.message))

	// JSON.stringify(object, null, 2) => 코드는 줄바꿈도 하고 들여쓰기도 해주어 사람이 읽기 편한 JSON 문자열을 만들어줌. 여기서 숫자 2는
	// 들여쓰기를 위한 공백문자(space) 두개를 사용하라는 의미
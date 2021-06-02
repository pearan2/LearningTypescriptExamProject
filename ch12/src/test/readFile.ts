/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   readFile.ts                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 14:02:31 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 14:04:19 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { readFile } from '../fileApi/readFile'

const readTest = async(filename:string) => {
	const result = await readFile(filename)
	console.log(`read ${result} from ${filename} file.`)
}

readTest('./data/hello.txt')
	.then(s => readTest('./data/test.json'))
	.catch((e : Error)=> console.log(e.message))
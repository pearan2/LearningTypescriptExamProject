/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   writeCsvFormatFakeData.ts                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 16:03:17 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 16:06:57 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as path from 'path'
import { IFake, makeFakeData } from './makeFakeData'
import { mkdir, writeFile, appendFile } from '../fileApi'
import { range } from '../utils/range'

export const writeCsvFormatFakeData = async(filename:string, numberOfItems:number) :Promise<string> => {
	const dirname = path.dirname(filename)
	await mkdir(dirname)
	const comma = ',', newLine = '\n'
	
	for (let n of range(numberOfItems)){
		const fake:IFake = makeFakeData()
		if (n == 0){
			const keys = Object.keys(fake).join(comma)
			await writeFile(filename, keys)
		}
		const value = Object.values(fake).join(comma)
		await appendFile(filename, newLine + value)
	}
	return `write ${numberOfItems} item to ${filename} file`
}
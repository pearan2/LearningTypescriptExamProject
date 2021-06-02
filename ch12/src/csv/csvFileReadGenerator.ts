/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   csvFileReadGenerator.ts                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 17:10:46 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 17:14:08 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// 앞에서 구현한 readFileGenerator 는 단순히 파일을 한줄 한줄 읽습니다. 이번에는 CSV 파일을 해석하면서
// 읽는 코드를 보겠습니다.

import { readFileGenerator } from '../fileApi'
import { zip } from '../utils/zip'

export function* csvFileReadGenerator(filename:string, delim:string=',') {
	let header = []
	for (let line of readFileGenerator(filename)){
		if (!header.length)
			header = line.split(delim)
		else
			yield zip(header, line.split(delim))
	}
}
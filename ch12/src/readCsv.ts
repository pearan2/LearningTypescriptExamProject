/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   readCsv.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 17:15:47 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 17:17:51 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { getFileNameAndNumber } from './utils/getFileNameAndNumber'
import { csvFileReadGenerator } from './csv/csvFileReadGenerator'

const [filename] = getFileNameAndNumber('./data/fake-100000.csv', 1)

let line = 1
for (let object of csvFileReadGenerator(filename)){
	console.log(`[${line++}] ${JSON.stringify(object)}`)
}

console.log('\n read complete.')
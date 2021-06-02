/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   writeCsv.ts                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 16:09:09 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 16:12:26 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { writeCsvFormatFakeData } from './fake'
import { getFileNameAndNumber } from './utils/getFileNameAndNumber'

const [filename, numberOfData] = getFileNameAndNumber('./data/fake', 1)
const csvFilename = `${filename}-${numberOfData}.csv`
writeCsvFormatFakeData(csvFilename, numberOfData)
	.then(result => console.log(result))
	.catch((e : Error) => console.log(e.message))
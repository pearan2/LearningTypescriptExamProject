/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   appendFile.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 14:06:59 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 14:09:34 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as fs from 'fs'

// fs.appendFile(filepath, data, 'utf8', callback)

export const appendFile = (filename: string, data:any) : Promise<any> => {
	return (new Promise<any>((resolve, reject) => {
		fs.appendFile(filename, data, 'utf8', (error:Error | null) => {
			error ? reject(error) : resolve(data)
		})
	}))
}
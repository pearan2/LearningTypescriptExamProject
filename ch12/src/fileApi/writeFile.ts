/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   writeFile.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 13:16:07 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 13:26:46 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as fs from 'fs'

export const writeFile = (filename: string, data:any) : Promise<any> => {
	return (new Promise<any>((resolve, reject) => {
		fs.writeFile(filename, data, 'utf8', (error:Error | null) => {
			error ? reject(error) : resolve(data)
		})
	}))
}
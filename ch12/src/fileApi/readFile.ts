/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   readFile.ts                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 13:43:44 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 13:45:35 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as fs from 'fs'

// fs.readFile(filepath, 'utf8' callback)

export const readFile = (filename:string) : Promise<any> => {
	return (new Promise<any>((resolve, reject) => {
		fs.readFile(filename, 'utf8', (error :Error |null, data :any) => {
			error ? reject(error) : resolve(data)
		})
	}))
}
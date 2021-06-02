/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   rmdir.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 12:15:20 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 12:17:01 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { resolve } from 'path/posix'
import rimraf from 'rimraf'
import { fileExists } from './fileExists'

export const rmdir = (dirname:string): Promise<string> => {
	return (new Promise<string>(
		async(resolve, reject) => {
			const alreadyExists = await fileExists(dirname)
			!alreadyExists ? resolve(dirname) : rimraf(dirname, error => error ? reject(error) : resolve(dirname))
		}
	))
}
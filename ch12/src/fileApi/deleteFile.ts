/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   deleteFile.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 14:14:26 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 14:17:41 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as fs from 'fs'
import { fileExists } from './fileExists'
// fs.unlink(filepath, callback)

// 파일이 존재하는지 판별해서 파일이 존재할때만 fs.unlink 호출로 파일을 삭제

export const deleteFile = (filename:string) : Promise<any> => {
	return (new Promise(async(resolve, reject) => {
		const isAlreadyExists = await fileExists(filename)
		isAlreadyExists ? fs.unlink(filename, (error : Error|null) => error ? reject(error) : resolve) : resolve
	}))
}
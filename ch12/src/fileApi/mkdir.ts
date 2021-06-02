/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   mkdir.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 11:57:14 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 13:39:40 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// nodeJS 에서는 mkdir 이라는 API 를 제공하는데, 이 API 는 아쉽게도 ./src/data/today 
// 처럼 여러 경로의 디렉터리를 한꺼번에 만들지 못합니다.

import mkdirp from 'mkdirp'
import { resolve } from 'path/posix'
import { fileExists } from './fileExists'

export const mkdir = (dirname : string) : Promise<string> => {
	return (new Promise<string>(
		async (resolve : any, reject) => {
			const alreadyExists = await fileExists(dirname)
			alreadyExists ? resolve(dirname) : mkdirp(dirname).then(resolve).catch(reject)
		}
	))
}
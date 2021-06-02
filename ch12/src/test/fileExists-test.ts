/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   fileExists-test.ts                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 11:50:20 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 11:52:38 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { fileExists } from '../fileApi/fileExists'

const exists = async(filepath:string) => {
	const result = await fileExists(filepath)
	console.log(`${filepath} ${result ? 'exists' : 'not exists'}`)
}

exists('./package.json')
exists('./package')

// 참고 : nodeJS 프로젝트에서는 package.json 이 존재하는 곳이 루트입니다.
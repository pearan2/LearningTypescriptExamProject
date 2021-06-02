/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   mkdir-test.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 12:10:25 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 12:11:51 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {mkdir} from '../fileApi/mkdir'

const makeDataDir = async(dirname: string) => {
	let result = await mkdir(dirname)
	console.log(`'${result}' dir created`)
}
makeDataDir('./data/today')
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   rmdir-test.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 12:19:12 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 12:21:24 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { rmdir } from '../fileApi/rmdir'

const deleteDataDir = async(dir:string) => {
	const result = await rmdir(dir)
	console.log(`'${result}' dir deleted.`)
}

deleteDataDir('./data')
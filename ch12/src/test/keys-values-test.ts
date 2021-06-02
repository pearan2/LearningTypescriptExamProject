/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   keys-values-test.ts                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 15:59:27 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 16:00:23 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { IFake, makeFakeData } from '../fake/makeFakeData'

const data: IFake = makeFakeData()
const keys = Object.keys(data)
console.log('keys:\n',keys)

const values = Object.values(data)
console.log('values:\n', values)
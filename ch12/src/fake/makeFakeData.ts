/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   makeFakeData.ts                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 15:54:51 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 15:56:47 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import Chance from 'chance'
import { IFake } from './IFake'

const c = new Chance

export const makeFakeData = () : IFake => ({
	name: c.name(),
	email: c.email(),
	profession: c.profession(),
	birthday: c.birthday(),
	sentence: c.sentence()
})

export {IFake}
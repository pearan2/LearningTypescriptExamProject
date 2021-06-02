/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   makeFakeData-test.ts                               :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 15:58:03 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 15:58:36 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { makeFakeData, IFake } from '../fake/makeFakeData'

const fakeData: IFake = makeFakeData()
console.log(fakeData)
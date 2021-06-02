/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   getFileNameAndNumber-test.ts                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 11:42:06 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 11:42:56 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { getFileNameAndNumber } from '../utils/getFileNameAndNumber'

const [filename, numberOfData] = getFileNameAndNumber('data/fake.csv', 100000)
console.log(filename, numberOfData)
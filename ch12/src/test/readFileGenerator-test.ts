/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   readFileGenerator-test.ts                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 17:04:47 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 17:08:29 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { readFileGenerator } from '../fileApi'

for (let value of readFileGenerator('data/fake-100000.csv')) {
	console.log('<line> ', value, ' </line >')
	break // 일단 첫 줄만 출력
}
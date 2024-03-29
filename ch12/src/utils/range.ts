/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   range.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 16:01:05 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 16:01:51 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export function* range(max:number, min:number = 0){
	while(min < max)
		yield (min++)
}
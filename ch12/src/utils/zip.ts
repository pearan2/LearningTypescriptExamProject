/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   zip.ts                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 16:15:47 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 16:17:48 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export const zip = (keys:string[], values:any[]) => {
	const makeObject = (key:string, value:any) => ({[key]:value})
	const mergeObject = (a:any[]) => a.reduce((sum, val) => ({...sum, ...val}), {})
	
	let tmp = keys
		.map((key, index) => [key, values[index]])
		.filter(a => a[0] && a[1])
		.map(a => makeObject(a[0], a[1]))
	return mergeObject(tmp)
}
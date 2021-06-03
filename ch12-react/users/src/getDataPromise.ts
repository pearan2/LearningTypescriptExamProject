/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   getDataPromise.ts                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/03 17:56:27 by honlee            #+#    #+#             */
/*   Updated: 2021/06/03 18:05:54 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import { IUser } from './IUser'

type GetDataPromiseCallback = (a: IUser[]) => void

export const getDataPromise = (fn: GetDataPromiseCallback) => (skip:number, limit:number) => {
	fetch(`http://localhost:4000/users/${skip}/${limit}`)
	.then(res => res.json())
	.then(fn)
}
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   IUser.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/03 17:55:28 by honlee            #+#    #+#             */
/*   Updated: 2021/06/03 17:56:15 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

export interface IUser{
	_id : string
	name: string
	email: string
	sentence: string
	profession: string
	birthday: Date
}
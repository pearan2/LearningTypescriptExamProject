/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   connect.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 19:44:54 by honlee            #+#    #+#             */
/*   Updated: 2021/06/03 00:20:40 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import MongoClient from 'mongodb'

export const connect = (mongoUrl:string = 'mongodb://localhost:27017') => 
	MongoClient.connect(mongoUrl, { useNewUrlParser:true, useUnifiedTopology:true })
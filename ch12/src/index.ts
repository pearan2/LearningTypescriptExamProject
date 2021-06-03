/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/03 14:07:45 by honlee            #+#    #+#             */
/*   Updated: 2021/06/03 14:13:16 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import express from 'express'

// 웹 브라우저의 주소창에서 http://localhost:4000/users/1/2 와 같은 경로로 접속했을 때
// 이를 처리하려면 코드를 다음과 같은 구조로 작성해야 합니다.
// app.get('/users/:skip/:limit', 라우터 콜백 함수)
// skip 과 limit 앞에 콜론 (:)은 다음 코드로 경로에서 1과 2 같은 값을 얻기 위해서 사용합니다.
// const {skip, limit} = req.params

const app = express(), port = 4000

app
	.get('/', (req, res) => res.json({message: 'Hello world!'}))
	.get('/users/:skip/:limit', (req, res) => {
		const {skip, limit} = req.params
		res.json({skip, limit})
	})
	.listen(port, () => console.log(`http://localhost:${port} started...`))
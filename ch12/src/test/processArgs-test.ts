/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   processArgs-test.ts                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 11:29:42 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 11:32:03 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// > ts-node src/test/processArgs-test.ts data/fake.csv 100000
// 이런식으로 명령줄 인ㅇ수는 노드제이에스의 process 내장 객체에서 얻을 수 있다.

// 실행해보면 data/fake.csv 와 100000 은 index 2 와 3 일때 얻어지는 것을 알 수 있다.
process.argv.forEach( (val:string, index:number)=>{
	console.log(index + ":" + val)
} )
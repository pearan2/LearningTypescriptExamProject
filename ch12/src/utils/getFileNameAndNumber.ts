/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   getFileNameAndNumber.ts                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 11:37:23 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 11:41:47 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export type FileNameAndNumber = [string, number]

export const getFileNameAndNumber = (defaultFilename:string, defaultNumberOfData: number): FileNameAndNumber => {
	const [bin, node, filename, numberOfData] = process.argv
	return [filename || defaultFilename, numberOfData? parseInt(numberOfData, 10) : defaultNumberOfData]
}

//parseInt(string, number) => 두번째 매개변수는 변환되는 수의 진법입니다. 디폴트가 10이 아님을 주의하세요.
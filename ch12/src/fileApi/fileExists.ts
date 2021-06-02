/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   fileExists.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 11:44:01 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 11:45:41 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// 코드를 작성하다보면 파일이나 디렉터리가 현재 있는지 없는지 확인해야 할 떄가 생깁니다.
// 이때 fs.access 함수를 사용 할 수 있습니다.

import * as fs from 'fs'

export const fileExists = (filepath: string): Promise<boolean> => {
	return (new Promise(resolve => fs.access(filepath, error => resolve(error ? false : true))))
}
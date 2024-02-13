import {Base} from "../environments/baseUrl"
export const Depositar = {
    depositarMoney: Base.url + 'depositarValor',
    getMoney: Base.url + 'getValor',
    retirarMoney: Base.url + 'sacarValor'
}

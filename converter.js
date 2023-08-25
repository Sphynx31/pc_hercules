function convertNumber(sn) {
    return Number(sn.replace(".", "").replace(",", "."));
}

const headset = "349,99";
const mouse = "799,99";
const keyboard = "489,99";
const mousepad = "174,00";
const monitor = "1.129,99";
const chair = "999,00";

const pcCase = "379,00";
const mobo = "2.299,00";
const cpu = "3.759,99";
const wc = "599,00";
const ram = String(469.00 * 4);
const psu = "1.799,90";
const gpu = "7.989,99";
const ssd = "1.199,99";

const peripheral = [headset, mouse, keyboard, mousepad, monitor, chair];
const peripheralValues = peripheral.map((e) => convertNumber(e));
const pc = [pcCase, mobo, cpu, wc, ram, psu, gpu, ssd];
const pcValues = pc.map((e) => convertNumber(e));

const totalPeripheral = peripheralValues.reduce((sum, value) => sum + value, 0);
const totalPc = pcValues.reduce((sum, value) => sum + value, 0);
const total = totalPeripheral + totalPc;
const diferenca = (25 * 1000) - total;

console.log("Todos os valores podem ser alterados simplesmente mudando os valores das variáveis acima!");

console.log("ALERTA!!! O valor de todos os totais não incluem o FRETE!!!");

console.log(`Total dos Perfiféricos: ${totalPeripheral.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
console.log(`Total do PC: ${totalPc.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
console.log(`Total: ${total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
console.log(`Difença do Orçamento (25K): ${diferenca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);

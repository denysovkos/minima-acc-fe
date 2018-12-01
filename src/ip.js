import ip from 'ip';
const x = ip.address();
export const currentIp = x === '127.0.0.1' ? '18.184.66.188' : x;

export const backendPort = 3000;
const https = require('https');

const urls = [
    'https://www.kanjl.com/',
    'https://www.kanjl.com/tests',
    'https://www.kanjl.com/treehole',
    'https://www.kanjl.com/articles',
    'https://www.kanjl.com/fashion'
];

const totalLoops = 1000;
const staySeconds = 5;

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function fetchUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            resolve({ statusCode: res.statusCode, success: true });
        }).on('error', (err) => {
            resolve({ statusCode: null, success: false, error: err.message });
        }).setTimeout(30000, () => {
            resolve({ statusCode: null, success: false, error: 'Timeout' });
        });
    });
}

async function run() {
    console.log(`开始遍历任务，共 ${totalLoops} 次循环`);
    
    for (let loop = 1; loop <= totalLoops; loop++) {
        console.log(`\n=== 循环 ${loop} / ${totalLoops} ===`);
        
        for (const url of urls) {
            console.log(`\n[${new Date().toLocaleTimeString()}] 正在访问: ${url}`);
            
            const result = await fetchUrl(url);
            if (result.success) {
                console.log(`[${new Date().toLocaleTimeString()}] 访问成功，状态码: ${result.statusCode}`);
            } else {
                console.log(`[${new Date().toLocaleTimeString()}] 访问失败: ${result.error}`);
            }
            
            console.log(`[${new Date().toLocaleTimeString()}] 停留 ${staySeconds} 秒...`);
            
            for (let i = staySeconds; i > 0; i--) {
                process.stdout.write(`\r剩余 ${i} 秒...`);
                await sleep(1);
            }
            console.log('\r停留完成');
        }
        
        console.log(`\n[${new Date().toLocaleTimeString()}] 第 ${loop} 次循环完成`);
    }
    
    console.log(`\n=== 所有 ${totalLoops} 次循环完成 ===`);
}

run();
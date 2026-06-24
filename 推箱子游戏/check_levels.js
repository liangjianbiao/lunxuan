const fs = require('fs');

const content = fs.readFileSync('script.js', 'utf8');

const levels = [];
let currentLevel = null;
let inMap = false;
let currentMap = [];

content.split('\n').forEach((line, index) => {
    if (line.includes('width:')) {
        currentLevel = { width: parseInt(line.match(/\d+/)[0]) };
    } else if (line.includes('height:')) {
        currentLevel.height = parseInt(line.match(/\d+/)[0]);
    } else if (line.includes('map:')) {
        inMap = true;
        currentMap = [];
    } else if (inMap && line.includes('"')) {
        const match = line.match(/"([^"]+)"/);
        if (match) {
            currentMap.push(match[1]);
        }
    } else if (inMap && line.includes(']')) {
        inMap = false;
        currentLevel.map = currentMap;
        levels.push(currentLevel);
        currentLevel = null;
    }
});

let errors = [];

levels.forEach((level, index) => {
    let boxes = 0;
    let targets = 0;
    
    level.map.forEach(row => {
        for (let i = 0; i < row.length; i++) {
            if (row[i] === '$') boxes++;
            if (row[i] === '+') targets++;
        }
    });
    
    if (boxes !== targets) {
        errors.push({
            level: index + 1,
            boxes,
            targets,
            difference: boxes - targets
        });
    }
});

console.log('=== 关卡检查结果 ===');
console.log(`总关卡数: ${levels.length}`);

if (errors.length === 0) {
    console.log('所有关卡检查通过！');
} else {
    console.log(`发现 ${errors.length} 个问题关卡：`);
    errors.forEach(e => {
        console.log(`第${e.level}关: 箱子(${e.boxes}) 目标(${e.targets}) 差: ${e.difference}`);
    });
}
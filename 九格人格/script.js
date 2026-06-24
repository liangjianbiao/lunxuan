const normalQuestions = [
    {
        question: "当我发现别人的错误时，我倾向于：",
        options: [
            { text: "直接指出并希望对方改正", type: 1 },
            { text: "委婉提醒，避免让对方难堪", type: 2 },
            { text: "先赞美对方，再提出建议", type: 3 },
            { text: "保持沉默，不想引起冲突", type: 9 }
        ]
    },
    {
        question: "面对压力时，我通常会：",
        options: [
            { text: "分析问题，寻找解决方案", type: 5 },
            { text: "寻求他人的支持和安慰", type: 2 },
            { text: "积极行动，克服困难", type: 8 },
            { text: "保持冷静，等待时机", type: 9 }
        ]
    },
    {
        question: "我最看重的是：",
        options: [
            { text: "公正和原则", type: 1 },
            { text: "与他人的和谐关系", type: 2 },
            { text: "成功和成就", type: 3 },
            { text: "内心的平静", type: 9 }
        ]
    },
    {
        question: "在团队中，我更倾向于：",
        options: [
            { text: "制定规则，确保秩序", type: 1 },
            { text: "支持和帮助他人", type: 2 },
            { text: "领导大家达成目标", type: 8 },
            { text: "协调各方，维持和谐", type: 9 }
        ]
    },
    {
        question: "当我感到不开心时，我会：",
        options: [
            { text: "独处思考，分析原因", type: 5 },
            { text: "找人倾诉，寻求安慰", type: 2 },
            { text: "做一些能让自己成功的事", type: 3 },
            { text: "做一些轻松的事情转移注意力", type: 7 }
        ]
    },
    {
        question: "我认为自己最大的优点是：",
        options: [
            { text: "严谨认真", type: 1 },
            { text: "乐于助人", type: 2 },
            { text: "富有创造力", type: 4 },
            { text: "善于分析", type: 5 }
        ]
    },
    {
        question: "面对不确定的情况，我会：",
        options: [
            { text: "提前做好准备，降低风险", type: 6 },
            { text: "积极乐观，相信一切会好", type: 7 },
            { text: "谨慎观望，等待更多信息", type: 5 },
            { text: "果断行动，勇于尝试", type: 8 }
        ]
    },
    {
        question: "我喜欢的工作环境是：",
        options: [
            { text: "有明确的规则和流程", type: 1 },
            { text: "团队合作，互相支持", type: 2 },
            { text: "充满挑战和机遇", type: 3 },
            { text: "自由灵活，有创意空间", type: 4 }
        ]
    },
    {
        question: "当别人向我求助时，我通常会：",
        options: [
            { text: "尽力帮助，不求回报", type: 2 },
            { text: "先评估自己能否胜任", type: 5 },
            { text: "看是否符合自己的原则", type: 1 },
            { text: "看对方是否值得帮助", type: 6 }
        ]
    },
    {
        question: "我更容易被什么打动：",
        options: [
            { text: "美丽的艺术和深刻的情感", type: 4 },
            { text: "真诚的友谊和温暖", type: 2 },
            { text: "伟大的成就和成功故事", type: 3 },
            { text: "智慧的见解和深刻的思考", type: 5 }
        ]
    },
    {
        question: "我对自己的要求是：",
        options: [
            { text: "追求完美，不断改进", type: 1 },
            { text: "保持善良，善待他人", type: 2 },
            { text: "出类拔萃，成为最好", type: 3 },
            { text: "保持真实，忠于自己", type: 4 }
        ]
    },
    {
        question: "在社交场合，我通常是：",
        options: [
            { text: "主动与人交往，热情开朗", type: 7 },
            { text: "细心倾听，关心他人", type: 2 },
            { text: "观察分析，保持距离", type: 5 },
            { text: "保持中立，协调各方", type: 9 }
        ]
    },
    {
        question: "我害怕的是：",
        options: [
            { text: "犯错和不完美", type: 1 },
            { text: "被拒绝和孤立", type: 2 },
            { text: "失败和不被认可", type: 3 },
            { text: "失去自由和被束缚", type: 7 }
        ]
    },
    {
        question: "我做决定时更依赖：",
        options: [
            { text: "逻辑和分析", type: 5 },
            { text: "直觉和感受", type: 4 },
            { text: "经验和先例", type: 6 },
            { text: "目标和结果", type: 3 }
        ]
    },
    {
        question: "我处理冲突的方式是：",
        options: [
            { text: "直面问题，解决冲突", type: 8 },
            { text: "避免冲突，保持和平", type: 9 },
            { text: "寻求公平，调解矛盾", type: 1 },
            { text: "关注感受，化解紧张", type: 2 }
        ]
    },
    {
        question: "我喜欢的学习方式是：",
        options: [
            { text: "系统学习，循序渐进", type: 1 },
            { text: "实践体验，学以致用", type: 3 },
            { text: "深度研究，独立思考", type: 5 },
            { text: "广泛涉猎，兴趣驱动", type: 7 }
        ]
    }
];

const proQuestions = [
    { question: "我常常觉得自己需要把事情做得完美。", options: [{text:"非常不符合",type:1,score:1},{text:"不太符合",type:1,score:2},{text:"一般",type:1,score:3},{text:"比较符合",type:1,score:4},{text:"非常符合",type:1,score:5}]},
    { question: "帮助他人会让我感到快乐和满足。", options: [{text:"非常不符合",type:2,score:1},{text:"不太符合",type:2,score:2},{text:"一般",type:2,score:3},{text:"比较符合",type:2,score:4},{text:"非常符合",type:2,score:5}]},
    { question: "我总是努力追求事业上的成功。", options: [{text:"非常不符合",type:3,score:1},{text:"不太符合",type:3,score:2},{text:"一般",type:3,score:3},{text:"比较符合",type:3,score:4},{text:"非常符合",type:3,score:5}]},
    { question: "我常常被深刻的情感和美感所吸引。", options: [{text:"非常不符合",type:4,score:1},{text:"不太符合",type:4,score:2},{text:"一般",type:4,score:3},{text:"比较符合",type:4,score:4},{text:"非常符合",type:4,score:5}]},
    { question: "我喜欢独处并进行深度思考。", options: [{text:"非常不符合",type:5,score:1},{text:"不太符合",type:5,score:2},{text:"一般",type:5,score:3},{text:"比较符合",type:5,score:4},{text:"非常符合",type:5,score:5}]},
    { question: "我倾向于怀疑权威和既定的规则。", options: [{text:"非常不符合",type:6,score:1},{text:"不太符合",type:6,score:2},{text:"一般",type:6,score:3},{text:"比较符合",type:6,score:4},{text:"非常符合",type:6,score:5}]},
    { question: "我喜欢体验各种新鲜有趣的事物。", options: [{text:"非常不符合",type:7,score:1},{text:"不太符合",type:7,score:2},{text:"一般",type:7,score:3},{text:"比较符合",type:7,score:4},{text:"非常符合",type:7,score:5}]},
    { question: "我敢于面对挑战并坚持自己的立场。", options: [{text:"非常不符合",type:8,score:1},{text:"不太符合",type:8,score:2},{text:"一般",type:8,score:3},{text:"比较符合",type:8,score:4},{text:"非常符合",type:8,score:5}]},
    { question: "我总是努力维持和平与和谐的环境。", options: [{text:"非常不符合",type:9,score:1},{text:"不太符合",type:9,score:2},{text:"一般",type:9,score:3},{text:"比较符合",type:9,score:4},{text:"非常符合",type:9,score:5}]},
    { question: "我对自己的要求很高，不容许犯错。", options: [{text:"非常不符合",type:1,score:1},{text:"不太符合",type:1,score:2},{text:"一般",type:1,score:3},{text:"比较符合",type:1,score:4},{text:"非常符合",type:1,score:5}]},
    { question: "我总是优先考虑他人的需求。", options: [{text:"非常不符合",type:2,score:1},{text:"不太符合",type:2,score:2},{text:"一般",type:2,score:3},{text:"比较符合",type:2,score:4},{text:"非常符合",type:2,score:5}]},
    { question: "我喜欢成为人群中的焦点。", options: [{text:"非常不符合",type:3,score:1},{text:"不太符合",type:3,score:2},{text:"一般",type:3,score:3},{text:"比较符合",type:3,score:4},{text:"非常符合",type:3,score:5}]},
    { question: "我常常感到自己与他人不同。", options: [{text:"非常不符合",type:4,score:1},{text:"不太符合",type:4,score:2},{text:"一般",type:4,score:3},{text:"比较符合",type:4,score:4},{text:"非常符合",type:4,score:5}]},
    { question: "我喜欢收集知识和信息。", options: [{text:"非常不符合",type:5,score:1},{text:"不太符合",type:5,score:2},{text:"一般",type:5,score:3},{text:"比较符合",type:5,score:4},{text:"非常符合",type:5,score:5}]},
    { question: "我总是为最坏的情况做准备。", options: [{text:"非常不符合",type:6,score:1},{text:"不太符合",type:6,score:2},{text:"一般",type:6,score:3},{text:"比较符合",type:6,score:4},{text:"非常符合",type:6,score:5}]},
    { question: "我讨厌无聊和单调的生活。", options: [{text:"非常不符合",type:7,score:1},{text:"不太符合",type:7,score:2},{text:"一般",type:7,score:3},{text:"比较符合",type:7,score:4},{text:"非常符合",type:7,score:5}]},
    { question: "我喜欢掌控局面和领导他人。", options: [{text:"非常不符合",type:8,score:1},{text:"不太符合",type:8,score:2},{text:"一般",type:8,score:3},{text:"比较符合",type:8,score:4},{text:"非常符合",type:8,score:5}]},
    { question: "我通常会避免与人发生冲突。", options: [{text:"非常不符合",type:9,score:1},{text:"不太符合",type:9,score:2},{text:"一般",type:9,score:3},{text:"比较符合",type:9,score:4},{text:"非常符合",type:9,score:5}]},
    { question: "我总是寻找改进自己的方法。", options: [{text:"非常不符合",type:1,score:1},{text:"不太符合",type:1,score:2},{text:"一般",type:1,score:3},{text:"比较符合",type:1,score:4},{text:"非常符合",type:1,score:5}]},
    { question: "我善于发现他人的优点和需求。", options: [{text:"非常不符合",type:2,score:1},{text:"不太符合",type:2,score:2},{text:"一般",type:2,score:3},{text:"比较符合",type:2,score:4},{text:"非常符合",type:2,score:5}]},
    { question: "成功对我来说非常重要。", options: [{text:"非常不符合",type:3,score:1},{text:"不太符合",type:3,score:2},{text:"一般",type:3,score:3},{text:"比较符合",type:3,score:4},{text:"非常符合",type:3,score:5}]},
    { question: "我对美和艺术有很高的敏感度。", options: [{text:"非常不符合",type:4,score:1},{text:"不太符合",type:4,score:2},{text:"一般",type:4,score:3},{text:"比较符合",type:4,score:4},{text:"非常符合",type:4,score:5}]},
    { question: "我倾向于从理性角度看待问题。", options: [{text:"非常不符合",type:5,score:1},{text:"不太符合",type:5,score:2},{text:"一般",type:5,score:3},{text:"比较符合",type:5,score:4},{text:"非常符合",type:5,score:5}]},
    { question: "我需要时间来信任他人。", options: [{text:"非常不符合",type:6,score:1},{text:"不太符合",type:6,score:2},{text:"一般",type:6,score:3},{text:"比较符合",type:6,score:4},{text:"非常符合",type:6,score:5}]},
    { question: "我喜欢规划未来的各种可能性。", options: [{text:"非常不符合",type:7,score:1},{text:"不太符合",type:7,score:2},{text:"一般",type:7,score:3},{text:"比较符合",type:7,score:4},{text:"非常符合",type:7,score:5}]},
    { question: "我不喜欢被人控制或指挥。", options: [{text:"非常不符合",type:8,score:1},{text:"不太符合",type:8,score:2},{text:"一般",type:8,score:3},{text:"比较符合",type:8,score:4},{text:"非常符合",type:8,score:5}]},
    { question: "我善于倾听并理解他人的感受。", options: [{text:"非常不符合",type:9,score:1},{text:"不太符合",type:9,score:2},{text:"一般",type:9,score:3},{text:"比较符合",type:9,score:4},{text:"非常符合",type:9,score:5}]},
    { question: "我常常批评自己和他人。", options: [{text:"非常不符合",type:1,score:1},{text:"不太符合",type:1,score:2},{text:"一般",type:1,score:3},{text:"比较符合",type:1,score:4},{text:"非常符合",type:1,score:5}]},
    { question: "我害怕被他人拒绝。", options: [{text:"非常不符合",type:2,score:1},{text:"不太符合",type:2,score:2},{text:"一般",type:2,score:3},{text:"比较符合",type:2,score:4},{text:"非常符合",type:2,score:5}]},
    { question: "我总是努力给他人留下好印象。", options: [{text:"非常不符合",type:3,score:1},{text:"不太符合",type:3,score:2},{text:"一般",type:3,score:3},{text:"比较符合",type:3,score:4},{text:"非常符合",type:3,score:5}]},
    { question: "我喜欢表达自己独特的观点和感受。", options: [{text:"非常不符合",type:4,score:1},{text:"不太符合",type:4,score:2},{text:"一般",type:4,score:3},{text:"比较符合",type:4,score:4},{text:"非常符合",type:4,score:5}]},
    { question: "我喜欢在做出决定前收集足够的信息。", options: [{text:"非常不符合",type:5,score:1},{text:"不太符合",type:5,score:2},{text:"一般",type:5,score:3},{text:"比较符合",type:5,score:4},{text:"非常符合",type:5,score:5}]},
    { question: "我常常担心事情会出错。", options: [{text:"非常不符合",type:6,score:1},{text:"不太符合",type:6,score:2},{text:"一般",type:6,score:3},{text:"比较符合",type:6,score:4},{text:"非常符合",type:6,score:5}]},
    { question: "我喜欢保持乐观和积极的心态。", options: [{text:"非常不符合",type:7,score:1},{text:"不太符合",type:7,score:2},{text:"一般",type:7,score:3},{text:"比较符合",type:7,score:4},{text:"非常符合",type:7,score:5}]},
    { question: "我是一个直接和坦率的人。", options: [{text:"非常不符合",type:8,score:1},{text:"不太符合",type:8,score:2},{text:"一般",type:8,score:3},{text:"比较符合",type:8,score:4},{text:"非常符合",type:8,score:5}]},
    { question: "我喜欢保持中立和客观。", options: [{text:"非常不符合",type:9,score:1},{text:"不太符合",type:9,score:2},{text:"一般",type:9,score:3},{text:"比较符合",type:9,score:4},{text:"非常符合",type:9,score:5}]},
    { question: "我重视公正和公平。", options: [{text:"非常不符合",type:1,score:1},{text:"不太符合",type:1,score:2},{text:"一般",type:1,score:3},{text:"比较符合",type:1,score:4},{text:"非常符合",type:1,score:5}]},
    { question: "我喜欢帮助他人解决问题。", options: [{text:"非常不符合",type:2,score:1},{text:"不太符合",type:2,score:2},{text:"一般",type:2,score:3},{text:"比较符合",type:2,score:4},{text:"非常符合",type:2,score:5}]},
    { question: "我总是设定高目标并努力实现。", options: [{text:"非常不符合",type:3,score:1},{text:"不太符合",type:3,score:2},{text:"一般",type:3,score:3},{text:"比较符合",type:3,score:4},{text:"非常符合",type:3,score:5}]},
    { question: "我常常感到孤独或与众不同。", options: [{text:"非常不符合",type:4,score:1},{text:"不太符合",type:4,score:2},{text:"一般",type:4,score:3},{text:"比较符合",type:4,score:4},{text:"非常符合",type:4,score:5}]},
    { question: "我倾向于保持情感上的距离。", options: [{text:"非常不符合",type:5,score:1},{text:"不太符合",type:5,score:2},{text:"一般",type:5,score:3},{text:"比较符合",type:5,score:4},{text:"非常符合",type:5,score:5}]},
    { question: "我喜欢有可靠的朋友和同事。", options: [{text:"非常不符合",type:6,score:1},{text:"不太符合",type:6,score:2},{text:"一般",type:6,score:3},{text:"比较符合",type:6,score:4},{text:"非常符合",type:6,score:5}]},
    { question: "我喜欢尝试新的体验和想法。", options: [{text:"非常不符合",type:7,score:1},{text:"不太符合",type:7,score:2},{text:"一般",type:7,score:3},{text:"比较符合",type:7,score:4},{text:"非常符合",type:7,score:5}]},
    { question: "我愿意为正义而战。", options: [{text:"非常不符合",type:8,score:1},{text:"不太符合",type:8,score:2},{text:"一般",type:8,score:3},{text:"比较符合",type:8,score:4},{text:"非常符合",type:8,score:5}]},
    { question: "我不喜欢匆忙和压力。", options: [{text:"非常不符合",type:9,score:1},{text:"不太符合",type:9,score:2},{text:"一般",type:9,score:3},{text:"比较符合",type:9,score:4},{text:"非常符合",type:9,score:5}]},
    { question: "我总是试图做正确的事情。", options: [{text:"非常不符合",type:1,score:1},{text:"不太符合",type:1,score:2},{text:"一般",type:1,score:3},{text:"比较符合",type:1,score:4},{text:"非常符合",type:1,score:5}]},
    { question: "我需要他人的认可和赞赏。", options: [{text:"非常不符合",type:2,score:1},{text:"不太符合",type:2,score:2},{text:"一般",type:2,score:3},{text:"比较符合",type:2,score:4},{text:"非常符合",type:2,score:5}]},
    { question: "我喜欢竞争并争取胜利。", options: [{text:"非常不符合",type:3,score:1},{text:"不太符合",type:3,score:2},{text:"一般",type:3,score:3},{text:"比较符合",type:3,score:4},{text:"非常符合",type:3,score:5}]},
    { question: "我对自己的情绪非常敏感。", options: [{text:"非常不符合",type:4,score:1},{text:"不太符合",type:4,score:2},{text:"一般",type:4,score:3},{text:"比较符合",type:4,score:4},{text:"非常符合",type:4,score:5}]},
    { question: "我喜欢分析问题并找出答案。", options: [{text:"非常不符合",type:5,score:1},{text:"不太符合",type:5,score:2},{text:"一般",type:5,score:3},{text:"比较符合",type:5,score:4},{text:"非常符合",type:5,score:5}]},
    { question: "我倾向于谨慎行事。", options: [{text:"非常不符合",type:6,score:1},{text:"不太符合",type:6,score:2},{text:"一般",type:6,score:3},{text:"比较符合",type:6,score:4},{text:"非常符合",type:6,score:5}]},
    { question: "我喜欢保持忙碌和活跃。", options: [{text:"非常不符合",type:7,score:1},{text:"不太符合",type:7,score:2},{text:"一般",type:7,score:3},{text:"比较符合",type:7,score:4},{text:"非常符合",type:7,score:5}]},
    { question: "我讨厌软弱和虚伪。", options: [{text:"非常不符合",type:8,score:1},{text:"不太符合",type:8,score:2},{text:"一般",type:8,score:3},{text:"比较符合",type:8,score:4},{text:"非常符合",type:8,score:5}]},
    { question: "我善于化解矛盾和冲突。", options: [{text:"非常不符合",type:9,score:1},{text:"不太符合",type:9,score:2},{text:"一般",type:9,score:3},{text:"比较符合",type:9,score:4},{text:"非常符合",type:9,score:5}]},
    { question: "我有强烈的是非观念。", options: [{text:"非常不符合",type:1,score:1},{text:"不太符合",type:1,score:2},{text:"一般",type:1,score:3},{text:"比较符合",type:1,score:4},{text:"非常符合",type:1,score:5}]},
    { question: "我总是愿意为他人提供支持。", options: [{text:"非常不符合",type:2,score:1},{text:"不太符合",type:2,score:2},{text:"一般",type:2,score:3},{text:"比较符合",type:2,score:4},{text:"非常符合",type:2,score:5}]},
    { question: "我喜欢展示自己的成就。", options: [{text:"非常不符合",type:3,score:1},{text:"不太符合",type:3,score:2},{text:"一般",type:3,score:3},{text:"比较符合",type:3,score:4},{text:"非常符合",type:3,score:5}]},
    { question: "我常常感到自己不够好。", options: [{text:"非常不符合",type:4,score:1},{text:"不太符合",type:4,score:2},{text:"一般",type:4,score:3},{text:"比较符合",type:4,score:4},{text:"非常符合",type:4,score:5}]},
    { question: "我喜欢独立工作和思考。", options: [{text:"非常不符合",type:5,score:1},{text:"不太符合",type:5,score:2},{text:"一般",type:5,score:3},{text:"比较符合",type:5,score:4},{text:"非常符合",type:5,score:5}]},
    { question: "我相信团队合作的力量。", options: [{text:"非常不符合",type:6,score:1},{text:"不太符合",type:6,score:2},{text:"一般",type:6,score:3},{text:"比较符合",type:6,score:4},{text:"非常符合",type:6,score:5}]},
    { question: "我讨厌被限制和束缚。", options: [{text:"非常不符合",type:7,score:1},{text:"不太符合",type:7,score:2},{text:"一般",type:7,score:3},{text:"比较符合",type:7,score:4},{text:"非常符合",type:7,score:5}]},
    { question: "我喜欢保护弱小和被压迫者。", options: [{text:"非常不符合",type:8,score:1},{text:"不太符合",type:8,score:2},{text:"一般",type:8,score:3},{text:"比较符合",type:8,score:4},{text:"非常符合",type:8,score:5}]},
    { question: "我喜欢随遇而安，顺其自然。", options: [{text:"非常不符合",type:9,score:1},{text:"不太符合",type:9,score:2},{text:"一般",type:9,score:3},{text:"比较符合",type:9,score:4},{text:"非常符合",type:9,score:5}]},
    { question: "我对自己和他人都很严格。", options: [{text:"非常不符合",type:1,score:1},{text:"不太符合",type:1,score:2},{text:"一般",type:1,score:3},{text:"比较符合",type:1,score:4},{text:"非常符合",type:1,score:5}]},
    { question: "我善于与人建立亲密关系。", options: [{text:"非常不符合",type:2,score:1},{text:"不太符合",type:2,score:2},{text:"一般",type:2,score:3},{text:"比较符合",type:2,score:4},{text:"非常符合",type:2,score:5}]},
    { question: "我总是追求效率和结果。", options: [{text:"非常不符合",type:3,score:1},{text:"不太符合",type:3,score:2},{text:"一般",type:3,score:3},{text:"比较符合",type:3,score:4},{text:"非常符合",type:3,score:5}]},
    { question: "我喜欢创造独特的东西。", options: [{text:"非常不符合",type:4,score:1},{text:"不太符合",type:4,score:2},{text:"一般",type:4,score:3},{text:"比较符合",type:4,score:4},{text:"非常符合",type:4,score:5}]},
    { question: "我倾向于保守和谨慎。", options: [{text:"非常不符合",type:5,score:1},{text:"不太符合",type:5,score:2},{text:"一般",type:5,score:3},{text:"比较符合",type:5,score:4},{text:"非常符合",type:5,score:5}]},
    { question: "我常常寻求安全感和稳定性。", options: [{text:"非常不符合",type:6,score:1},{text:"不太符合",type:6,score:2},{text:"一般",type:6,score:3},{text:"比较符合",type:6,score:4},{text:"非常符合",type:6,score:5}]},
    { question: "我喜欢享受生活中的美好事物。", options: [{text:"非常不符合",type:7,score:1},{text:"不太符合",type:7,score:2},{text:"一般",type:7,score:3},{text:"比较符合",type:7,score:4},{text:"非常符合",type:7,score:5}]},
    { question: "我是一个坚强和自信的人。", options: [{text:"非常不符合",type:8,score:1},{text:"不太符合",type:8,score:2},{text:"一般",type:8,score:3},{text:"比较符合",type:8,score:4},{text:"非常符合",type:8,score:5}]},
    { question: "我喜欢和谐的人际关系。", options: [{text:"非常不符合",type:9,score:1},{text:"不太符合",type:9,score:2},{text:"一般",type:9,score:3},{text:"比较符合",type:9,score:4},{text:"非常符合",type:9,score:5}]},
    { question: "我注重细节和准确性。", options: [{text:"非常不符合",type:1,score:1},{text:"不太符合",type:1,score:2},{text:"一般",type:1,score:3},{text:"比较符合",type:1,score:4},{text:"非常符合",type:1,score:5}]},
    { question: "我总是关心他人的感受。", options: [{text:"非常不符合",type:2,score:1},{text:"不太符合",type:2,score:2},{text:"一般",type:2,score:3},{text:"比较符合",type:2,score:4},{text:"非常符合",type:2,score:5}]},
    { question: "我喜欢成为领导者。", options: [{text:"非常不符合",type:3,score:1},{text:"不太符合",type:3,score:2},{text:"一般",type:3,score:3},{text:"比较符合",type:3,score:4},{text:"非常符合",type:3,score:5}]},
    { question: "我对生命的意义有深刻的思考。", options: [{text:"非常不符合",type:4,score:1},{text:"不太符合",type:4,score:2},{text:"一般",type:4,score:3},{text:"比较符合",type:4,score:4},{text:"非常符合",type:4,score:5}]},
    { question: "我喜欢阅读和学习新知识。", options: [{text:"非常不符合",type:5,score:1},{text:"不太符合",type:5,score:2},{text:"一般",type:5,score:3},{text:"比较符合",type:5,score:4},{text:"非常符合",type:5,score:5}]},
    { question: "我倾向于怀疑他人的动机。", options: [{text:"非常不符合",type:6,score:1},{text:"不太符合",type:6,score:2},{text:"一般",type:6,score:3},{text:"比较符合",type:6,score:4},{text:"非常符合",type:6,score:5}]},
    { question: "我喜欢计划未来的旅行和活动。", options: [{text:"非常不符合",type:7,score:1},{text:"不太符合",type:7,score:2},{text:"一般",type:7,score:3},{text:"比较符合",type:7,score:4},{text:"非常符合",type:7,score:5}]},
    { question: "我不害怕面对困难和挑战。", options: [{text:"非常不符合",type:8,score:1},{text:"不太符合",type:8,score:2},{text:"一般",type:8,score:3},{text:"比较符合",type:8,score:4},{text:"非常符合",type:8,score:5}]},
    { question: "我喜欢倾听他人的意见和建议。", options: [{text:"非常不符合",type:9,score:1},{text:"不太符合",type:9,score:2},{text:"一般",type:9,score:3},{text:"比较符合",type:9,score:4},{text:"非常符合",type:9,score:5}]},
    { question: "我总是试图改进现状。", options: [{text:"非常不符合",type:1,score:1},{text:"不太符合",type:1,score:2},{text:"一般",type:1,score:3},{text:"比较符合",type:1,score:4},{text:"非常符合",type:1,score:5}]},
    { question: "我喜欢被他人需要和依赖。", options: [{text:"非常不符合",type:2,score:1},{text:"不太符合",type:2,score:2},{text:"一般",type:2,score:3},{text:"比较符合",type:2,score:4},{text:"非常符合",type:2,score:5}]},
    { question: "我善于推销自己和自己的想法。", options: [{text:"非常不符合",type:3,score:1},{text:"不太符合",type:3,score:2},{text:"一般",type:3,score:3},{text:"比较符合",type:3,score:4},{text:"非常符合",type:3,score:5}]},
    { question: "我常常感到忧郁或情绪化。", options: [{text:"非常不符合",type:4,score:1},{text:"不太符合",type:4,score:2},{text:"一般",type:4,score:3},{text:"比较符合",type:4,score:4},{text:"非常符合",type:4,score:5}]},
    { question: "我喜欢保持冷静和理智。", options: [{text:"非常不符合",type:5,score:1},{text:"不太符合",type:5,score:2},{text:"一般",type:5,score:3},{text:"比较符合",type:5,score:4},{text:"非常符合",type:5,score:5}]},
    { question: "我需要明确的规则和指导。", options: [{text:"非常不符合",type:6,score:1},{text:"不太符合",type:6,score:2},{text:"一般",type:6,score:3},{text:"比较符合",type:6,score:4},{text:"非常符合",type:6,score:5}]},
    { question: "我讨厌重复性的工作。", options: [{text:"非常不符合",type:7,score:1},{text:"不太符合",type:7,score:2},{text:"一般",type:7,score:3},{text:"比较符合",type:7,score:4},{text:"非常符合",type:7,score:5}]},
    { question: "我喜欢挑战权威和传统。", options: [{text:"非常不符合",type:8,score:1},{text:"不太符合",type:8,score:2},{text:"一般",type:8,score:3},{text:"比较符合",type:8,score:4},{text:"非常符合",type:8,score:5}]},
    { question: "我喜欢保持内心的平静。", options: [{text:"非常不符合",type:9,score:1},{text:"不太符合",type:9,score:2},{text:"一般",type:9,score:3},{text:"比较符合",type:9,score:4},{text:"非常符合",type:9,score:5}]}
];

const typeDescriptions = {
    1: {
        name: "完美主义者",
        englishName: "Reformer",
        description: "完美主义者追求完美、公正和原则。他们有强烈的是非观念，善于分析问题并寻找改进的方法。他们对自己和他人都有很高的标准，希望一切都能按照正确的方式进行。他们的优点是严谨、可靠、有责任感，是团队中值得信赖的成员。"
    },
    2: {
        name: "助人者",
        englishName: "Helper",
        description: "助人者热情、友善，总是乐于帮助他人。他们善于发现他人的需求并提供支持，重视人际关系和情感连接。他们的快乐来自于帮助他人和被他人需要，是团队中的粘合剂，能够营造温暖和谐的氛围。"
    },
    3: {
        name: "成就者",
        englishName: "Achiever",
        description: "成就者充满活力，追求成功和认可。他们设定高目标并努力实现，善于展现自己的能力和成就。他们是天生的领导者和执行者，能够激励团队达成共同目标，在事业上往往能取得显著的成就。"
    },
    4: {
        name: "艺术型",
        englishName: "Individualist",
        description: "艺术型富有创造力和独特性，对美和情感有深刻的敏感度。他们善于表达自己的内心世界，追求真实和独特。他们常常有丰富的想象力和艺术天赋，能够为团队带来创新的视角和深刻的洞察力。"
    },
    5: {
        name: "智慧型",
        englishName: "Investigator",
        description: "智慧型热爱知识和思考，喜欢独处并进行深度分析。他们善于收集信息、分析问题，是团队中的智囊团。他们保持理性和客观，能够提供有价值的见解和解决方案，但有时可能显得过于疏离。"
    },
    6: {
        name: "忠诚型",
        englishName: "Loyalist",
        description: "忠诚型重视安全感和稳定性，是可靠的朋友和同事。他们谨慎行事，为最坏的情况做准备，同时也非常重视团队合作。他们是值得信赖的伙伴，能够在困难时刻给予支持和帮助。"
    },
    7: {
        name: "活跃型",
        englishName: "Enthusiast",
        description: "活跃型乐观开朗，喜欢体验各种新鲜事物。他们充满好奇心和活力，讨厌无聊和束缚。他们能够为团队带来积极的能量和创新的想法，善于发现生活中的乐趣和机会。"
    },
    8: {
        name: "领袖型",
        englishName: "Challenger",
        description: "领袖型自信果断，敢于面对挑战。他们有强烈的正义感，喜欢保护弱小和被压迫者。他们是天生的领导者，能够在危机中保持冷静并做出果断的决策，是团队中的坚强后盾。"
    },
    9: {
        name: "和平型",
        englishName: "Peacemaker",
        description: "和平型温和友善，追求和谐与平静。他们善于倾听和理解他人，能够化解矛盾和冲突。他们是团队中的调解者，能够营造和谐的工作环境，让每个人都感到被尊重和接纳。"
    }
};

let currentQuestions = [];
let currentIndex = 0;
let answers = {};
let scores = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
let isProMode = false;

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function loadQuestion(index) {
    const question = currentQuestions[index];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-question').textContent = index + 1;
    document.getElementById('total-questions').textContent = currentQuestions.length;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, optIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (answers[index] === optIndex) {
            optionDiv.classList.add('selected');
        }
        
        const input = document.createElement('input');
        input.type = isProMode ? 'radio' : 'radio';
        input.name = 'answer';
        input.value = optIndex;
        input.checked = answers[index] === optIndex;
        
        input.addEventListener('change', () => {
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            optionDiv.classList.add('selected');
            answers[index] = optIndex;
            
            const selectedOption = question.options[optIndex];
            if (isProMode) {
                scores[selectedOption.type] += selectedOption.score;
            } else {
                scores[selectedOption.type]++;
            }
            
            updateButtons();
        });
        
        const label = document.createElement('span');
        label.textContent = option.text;
        
        optionDiv.appendChild(input);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);
    });
    
    updateProgress();
    updateButtons();
}

function updateProgress() {
    const progress = ((currentIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

function updateButtons() {
    document.getElementById('btn-prev').disabled = currentIndex === 0;
    document.getElementById('btn-next').style.display = currentIndex === currentQuestions.length - 1 ? 'none' : 'block';
    document.getElementById('btn-submit').style.display = currentIndex === currentQuestions.length - 1 ? 'block' : 'none';
    
    const hasAnswer = answers[currentIndex] !== undefined;
    document.getElementById('btn-next').disabled = !hasAnswer;
    document.getElementById('btn-submit').disabled = !hasAnswer;
}

function calculateResult() {
    let maxType = 1;
    let maxScore = scores[1];
    
    for (let i = 2; i <= 9; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxType = i;
        }
    }
    
    return maxType;
}

function showResult() {
    const type = calculateResult();
    const description = typeDescriptions[type];
    
    document.getElementById('type-result').innerHTML = `
        <div class="type-number">${type}</div>
        <h3>${description.name} (${description.englishName})</h3>
    `;
    
    document.getElementById('type-description').innerHTML = `
        <h4>性格特点</h4>
        <p>${description.description}</p>
    `;
    
    let scoreHtml = '<h4>各类型得分详情</h4>';
    for (let i = 1; i <= 9; i++) {
        const maxScore = isProMode ? 50 : 16;
        const percentage = Math.round((scores[i] / maxScore) * 100);
        scoreHtml += `
            <div class="score-bar">
                <span class="type-label">${i}型</span>
                <div class="bar-container">
                    <div class="bar-fill" style="width: ${percentage}%"></div>
                </div>
                <span class="score-value">${scores[i]}</span>
            </div>
        `;
    }
    document.getElementById('score-details').innerHTML = scoreHtml;
    
    showPage('result-page');
}

document.getElementById('btn-normal').addEventListener('click', () => {
    currentQuestions = normalQuestions;
    isProMode = false;
    currentIndex = 0;
    answers = {};
    scores = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
    loadQuestion(0);
    showPage('test-page');
});

document.getElementById('btn-pro').addEventListener('click', () => {
    currentQuestions = proQuestions;
    isProMode = true;
    currentIndex = 0;
    answers = {};
    scores = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
    loadQuestion(0);
    showPage('test-page');
});

document.getElementById('btn-next').addEventListener('click', () => {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestion(currentIndex);
    }
});

document.getElementById('btn-prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        const prevQuestion = currentQuestions[currentIndex];
        if (answers[currentIndex] !== undefined) {
            const selectedOption = prevQuestion.options[answers[currentIndex]];
            if (isProMode) {
                scores[selectedOption.type] -= selectedOption.score;
            } else {
                scores[selectedOption.type]--;
            }
        }
        currentIndex--;
        loadQuestion(currentIndex);
    }
});

document.getElementById('btn-submit').addEventListener('click', () => {
    showResult();
});

document.getElementById('btn-restart').addEventListener('click', () => {
    showPage('welcome-page');
});
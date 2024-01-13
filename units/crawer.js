import fetch from 'node-fetch';

// 爬取函数，调用你的爬取服务
async function crawer(url) {
    console.log(`正在使用 URL 进行自定义爬取:${JSON.stringify(url)}`);
    try {
        const response = await fetch('https://crawer.search2ai.one', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                url: url
            })
        });

        if (!response.ok) {
            console.error(`API 请求失败, 状态码: ${response.status}`);
            return `API 请求失败, 状态码: ${response.status}`;
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            console.error("收到的响应不是有效的 JSON 格式");
            return "收到的响应不是有效的 JSON 格式";
        }

        const data = await response.json();
        console.log('自定义爬取服务调用完成');
        return data; // 返回一个 JavaScript 对象，而不是一个 JSON 字符串
    } catch (error) {
        console.error(`在 crawer 函数中捕获到错误: ${error}`);
        return `在 crawer 函数中捕获到错误: ${error}`;
    }
}
export default crawer;
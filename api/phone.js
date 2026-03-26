export default function handler(req, res) {
    // 允许跨域（可选）
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const phone = 13855715529;
    if (!phone) {
        return res.status(500).json({ error: '未配置号码' });
    }
    // 只返回号码，不记录任何日志（隐私）
    res.status(200).json({ phone });
}

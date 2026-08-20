const fs = require('fs');
const content = fs.readFileSync('Landing Dr Walter Vosgrau.html', 'utf8');

const manifestStart = content.indexOf('<script type="__bundler/manifest">');
const manifestEnd = content.indexOf('</script>', manifestStart);

if (manifestStart !== -1 && manifestEnd !== -1) {
    const jsonStr = content.substring(manifestStart + 34, manifestEnd).trim();
    try {
        const manifest = JSON.parse(jsonStr);
        if (!fs.existsSync('public/assets')) {
            fs.mkdirSync('public/assets', { recursive: true });
        }
        for (const [uuid, entry] of Object.entries(manifest)) {
            if (entry.mime.startsWith('image/')) {
                const ext = entry.mime.split('/')[1] === 'jpeg' ? 'jpg' : entry.mime.split('/')[1];
                const data = Buffer.from(entry.data, 'base64');
                fs.writeFileSync(`public/assets/${uuid}.${ext}`, data);
            }
        }
        console.log('Assets extracted successfully.');
    } catch (e) {
        console.error('Error parsing JSON:', e.message);
    }
} else {
    console.log('Manifest tag not found.');
}

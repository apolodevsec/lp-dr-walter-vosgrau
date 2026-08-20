const fs = require('fs');
const content = fs.readFileSync('Landing Dr Walter Vosgrau.html', 'utf8');

const templateStart = content.indexOf('<script type="__bundler/template">');
const templateEnd = content.indexOf('</script>', templateStart);

if (templateStart !== -1 && templateEnd !== -1) {
    const jsonStr = content.substring(templateStart + 34, templateEnd).trim();
    try {
        const templateStr = JSON.parse(jsonStr);
        fs.writeFileSync('extracted_template.html', templateStr);
        console.log('Template extracted successfully.');
    } catch (e) {
        console.error('Error parsing JSON:', e.message);
    }
} else {
    console.log('Template tag not found.');
}

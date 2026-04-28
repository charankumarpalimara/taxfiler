const fs = require('fs');
const path = require('path');

const stylesDir = 'd:/charan/React/greenCo new/src/styles';
const files = fs.readdirSync(stylesDir).filter(f => f.endsWith('.css'));

files.forEach(file => {
    const content = fs.readFileSync(path.join(stylesDir, file), 'utf8');
    const heroTitleMatch = content.match(/\.hero-title\s*{[^}]*font-size:\s*([^;}]*)/);
    const mobileQuery = content.match(/@media\s*\(max-width:\s*768px\)\s*{/);
    
    console.log(`File: ${file}`);
    console.log(`  Hero Title Desktop: ${heroTitleMatch ? heroTitleMatch[1] : 'N/A'}`);
    console.log(`  Has 768px query: ${!!mobileQuery}`);
    
    if (mobileQuery) {
        // Simple search for hero overrides in mobile query
        const queryIndex = mobileQuery.index;
        const queryContent = content.substring(queryIndex);
        const mobileTitle = queryContent.match(/\.hero-title\s*{[^}]*font-size:\s*([^;}]*)/);
        console.log(`  Hero Title Mobile: ${mobileTitle ? mobileTitle[1] : 'Uses Desktop'}`);
    }
    console.log('---');
});

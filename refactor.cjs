const fs = require('fs');
const path = require('path');

const resourcesPath = path.join(__dirname, 'pages/Resources.tsx');
const studyGuidePath = path.join(__dirname, 'pages/StudyGuide.tsx');
const dataDir = path.join(__dirname, 'data');

if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// --- Refactor Resources.tsx ---
let resourcesContent = fs.readFileSync(resourcesPath, 'utf8');

// The array starts at `const resources: ResourceArticle[] = [`
// and ends before `const Resources: React.FC = () => {`
const resourcesStart = resourcesContent.indexOf('const resources: ResourceArticle[] = [');
const resourcesEnd = resourcesContent.indexOf('const Resources: React.FC = () => {');

if (resourcesStart !== -1 && resourcesEnd !== -1) {
    const extractedResources = resourcesContent.slice(resourcesStart, resourcesEnd);
    const resourcesDataContent = `import React from 'react';\nimport { Cpu, Zap, Sparkles, Code, Globe } from 'lucide-react';\nimport { ResourceArticle } from '../types';\n\nexport ${extractedResources}`;
    
    fs.writeFileSync(path.join(dataDir, 'resourcesData.tsx'), resourcesDataContent);
    
    // Remove the interface and the array from Resources.tsx
    // The interface starts at `interface ResourceArticle {` and ends before `const resources:`
    const interfaceStart = resourcesContent.indexOf('interface ResourceArticle {');
    
    const newResourcesContent = resourcesContent.slice(0, interfaceStart) +
        `import { ResourceArticle } from '../types';\nimport { resources } from '../data/resourcesData';\n\n` +
        resourcesContent.slice(resourcesEnd);
        
    fs.writeFileSync(resourcesPath, newResourcesContent);
    console.log('Successfully refactored Resources.tsx');
} else {
    console.log('Could not find resources array in Resources.tsx');
}

// --- Refactor StudyGuide.tsx ---
let studyGuideContent = fs.readFileSync(studyGuidePath, 'utf8');

// Types start at `type CycleId = ` and end before `const SCHOOL_INTRO`
const typesStart = studyGuideContent.indexOf('type CycleId =');
const schoolIntroStart = studyGuideContent.indexOf('const SCHOOL_INTRO =');

// `studyData` ends before `const StudyGuide: React.FC = () => {`
const studyGuideComponentStart = studyGuideContent.indexOf('const StudyGuide: React.FC = () => {');

if (typesStart !== -1 && schoolIntroStart !== -1 && studyGuideComponentStart !== -1) {
    const extractedData = studyGuideContent.slice(schoolIntroStart, studyGuideComponentStart);
    
    const studyGuideDataContent = `import React from 'react';\nimport { CycleId, CycleData } from '../types';\n\nexport ${extractedData.replace('const SCHOOL_INTRO =', 'const SCHOOL_INTRO =').replace('const DRIVE_ROOT_URL =', 'export const DRIVE_ROOT_URL =').replace('const studyData:', 'export const studyData:')}`;
    // wait, we need to export SCHOOL_INTRO too
    const finalStudyGuideDataContent = studyGuideDataContent.replace('const SCHOOL_INTRO =', 'export const SCHOOL_INTRO =');

    fs.writeFileSync(path.join(dataDir, 'studyGuideData.tsx'), finalStudyGuideDataContent);
    
    // Remove types and data from StudyGuide.tsx
    const newStudyGuideContent = studyGuideContent.slice(0, typesStart) +
        `import { CycleId, ViewMode, Module, ResourceItem, Semester, CycleData } from '../types';\nimport { SCHOOL_INTRO, DRIVE_ROOT_URL, studyData } from '../data/studyGuideData';\n\n` +
        studyGuideContent.slice(studyGuideComponentStart);
        
    fs.writeFileSync(studyGuidePath, newStudyGuideContent);
    console.log('Successfully refactored StudyGuide.tsx');
} else {
    console.log('Could not find necessary sections in StudyGuide.tsx');
}

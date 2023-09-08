#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'node:fs';
import path from 'path';
import inquirer from 'inquirer';
import {
  componentIndexTemplate,
  componentTemplate,
} from '@/cmds/commands'; 
import { capitalize } from '@/utils/capitalize';
import dotenv from 'dotenv';

dotenv.config();

const COMPONENTS_PATH = process.env.COMPONENTS_PATH || 'src/components';

const program = new Command();

program
  .version('1.0.0')
  .description('Component Generator CLI');

program
  .option('-s, --server <name>', 'generate a server component')
  .option('-c, --client <name>', 'generate a client component')
  .action(async (options) => {
    let { server, client } = options;
    let componentName: string;
    let componentType: 'server' | 'client' = 'client'

    if (!server && !client) {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'componentType',
        message: 'Which type of component would you like to generate?',
        choices: ['server', 'client']
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of the component?',
        validate: (input) => {
          if (!input) {
            return 'A component name is required!';
          }
          if (/\s/.test(input)) {
            return 'Component name must be a single word!';
          }
          return true;
        }
      }
    ]);

    if (answers.componentType === 'server') {
      // componentName = server;
      // componentType = 'server';
      server = answers.componentType = 'server';
      componentName = answers.componentName;
    } else if (answers.componentType === 'client') {
      // componentName = client;
      // componentType = 'client';
      client = answers.componentType = 'client';
      componentName = answers.componentName;
    } else {
      console.error('No valid component type specified');
      process.exit(1);
    }

    const capitalizedComponentName = capitalize(componentName);
    const componentDirPaths = path.join(process.cwd(), 'src');
    const componentDirPath = path.join(componentDirPaths, `${COMPONENTS_PATH}/${componentName}`);
    
    const componentFilePath = path.join(componentDirPath, `${capitalizedComponentName}.tsx`);
    const componentFileIndexPath = path.join(componentDirPath, 'index.tsx');

  
    // Create directory if it doesn't exist
    
    if (!fs.existsSync(componentDirPath)) {
        fs.mkdirSync(componentDirPath, { recursive: true });
      }
  
      // Write component file
      fs.writeFileSync(componentFilePath, componentTemplate(capitalizedComponentName,  componentType), 'utf8');
  
      // Write index file
      fs.writeFileSync(componentFileIndexPath, componentIndexTemplate(capitalizedComponentName), 'utf8');
    
      console.log(`Generated ${componentType} component named ${capitalizedComponentName}`);
    }
  });

  
  program.parse(process.argv);
  
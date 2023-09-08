import { capitalize } from "@/utils/capitalize";
import dotenv from "dotenv";

dotenv.config();

const COMPONENTS_PATH = process.env.COMPONENTS_PATH || 'src/components';

export const COMPONENT_DIR_PATH = (name: string): string =>
    `${COMPONENTS_PATH}/${name}`;

export const COMPONENT_FILE_PATH = (name: string): string =>
    `${COMPONENT_DIR_PATH(name)}/${capitalize(name)}.tsx`;

export const COMPONENT_FILE_INDEX_PATH = (name: string): string =>
    `${COMPONENT_DIR_PATH(name)}/index.tsx`;
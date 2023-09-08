export const componentIndexTemplate = (name: string): string => {
    return `import ${name} from "./${name}";
export default ${name};`;
};

export const componentTemplate = (name: string, type: 'client' | 'server'): string => {
    const useDeclaration = type === 'client' ? '"use client";' : '"use server";';
    const asyncDeclaration = type === 'server' ? 'async ' : '';

    return `${useDeclaration}

export default ${asyncDeclaration}function ${name}() {
    // ...
    return (
        <div>
            <h1>${name}</h1>
        </div>
    );
};
    `;
};

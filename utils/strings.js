// Convert string to uppercase
export function toUpperCase(str) {
    return str.toUpperCase();
}

// Convert string to lowercase
export function toLowerCase(str) {
    return str.toLowerCase();
}

// Convert string to camelCase
export function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

// Convert string to snake_case
export function toSnakeCase(str) {
    return str
        .replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('_');
}

// Convert string to kebab-case
export function toKebabCase(str) {
    return str
        .replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('-');
}

// Convert string to pascalCase
export function toPascalCase(str) {
    return str
        .replace(/(\w)(\w*)/g,
            function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();})
        .replace(/\W/g, '');
}

// Convert string to Title Case
export function toTitleCase(str) {
    return str
        .replace(/-|_|(\d)/g, ' $1')
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Capitalize the first letter of each word
export function capitalizeFirstLetter(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
export const humanize = (content: string) => {
    if (!content) return null;

    return content
        .replace(/^[\s_]+|[\s_]+$/g, '') // Remove leading/trailing spaces or underscores
        .replace(/[_\s]+/g, ' ') // Replace underscores and spaces with a single space
        .replace(/^[a-z]/, function (m) {
            // Capitalize the first letter of entire word
            return m.toUpperCase();
        });
};

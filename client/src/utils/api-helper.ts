/**
 *
 * @param requestPath API endpoint relative path
 * @param options Options for the request
 * @returns {Promise} resolves when the request is successful or rejected
 */
export const fetchAPI = (requestPath: string, options?: RequestInit): Promise<any> => {
    if (!process.env.API_URL || !process.env.GITHUB_ACCESS_TOKEN) {
        throw new Error('API_URL and GITHUB_ACCESS_TOKEN environment variables are required');
    }

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
        credentials: 'include',
        mode: 'cors',
        ...options,
    };

    const requestUrl = `${process.env.API_URL}/${requestPath}`;

    return fetch(requestUrl, requestOptions);
};

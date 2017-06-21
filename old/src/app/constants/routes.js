const url = 'http://localhost:3006';
const initRoutesUrl = 'http://localhost:3006/init_routes.json';
const dataUrl = 'http://localhost:3006/data.json';

export const getHashOffersRoute = () => `${url}/offers/`

export const getAuthorDetailsRoute = (authorId) => {
	return `${url}/author-details/${authorId}`
}


export const getAllDataRoute = () => `${dataUrl}`

export const getInitRoutesUrls = () => `${initRoutesUrl}`
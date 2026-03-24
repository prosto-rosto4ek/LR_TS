export interface ISource {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}

export interface IArticle {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface INewsResponse {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export interface ISourcesResponse {
    status: string;
    sources: ISource[];
}

export type RequestOptions = {
    [key: string]: string | number | boolean;
};

export interface IRequestParams {
    endpoint: string;
    options?: RequestOptions;
}

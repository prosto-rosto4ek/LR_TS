import './news.css';
import { IArticle } from '../../../types';

class News {
    draw(data: IArticle[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const photo = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            if (photo) {
                photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            const author = newsClone.querySelector('.news__meta-author');
            if (author) {
                author.textContent = item.author || item.source.name;
            }

            const date = newsClone.querySelector('.news__meta-date');
            if (date) {
                date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const title = newsClone.querySelector('.news__description-title');
            if (title) title.textContent = item.title;

            const source = newsClone.querySelector('.news__description-source');
            if (source) source.textContent = item.source.name;

            const content = newsClone.querySelector('.news__description-content');
            if (content) content.textContent = item.description;

            const link = newsClone.querySelector('.news__read-more a');
            if (link) link.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;

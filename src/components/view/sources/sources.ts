import './sources.css';
import { ISource } from '../../../types';

class Sources {
    draw(data: ISource[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const name = sourceClone.querySelector('.source__item-name');
            if (name) name.textContent = item.name;

            const sourceItem = sourceClone.querySelector('.source__item');
            if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;

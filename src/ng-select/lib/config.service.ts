import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NgSelectConfig {
    placeholder: string;
    fixedPlaceholder: boolean;
    notFoundText = 'No items found';
    typeToSearchText = 'Type to search';
    addTagText = 'Add item';
    loadingText = 'Loading...';
    clearAllText = 'Clear selection';
    disableVirtualScroll = true;
    openOnEnter = true;
    appendTo: string;
    bindValue: string;
    bindLabel: string;
    appearance = 'underline';
    clearSearchOnAdd: boolean;
    deselectOnClick: boolean;
}

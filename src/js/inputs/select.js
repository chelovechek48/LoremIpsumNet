import SelectPlugin from 'choices.js';

const getSelectElement = (name) => `[name="${name}"]`;
const config = {
  searchEnabled: false,
  itemSelectText: false,
  classNames: {
    containerOuter: 'select form__item form__item_theme_gray form__item_font-size_large',
    containerInner: 'select__inner',
    itemChoice: '',
    list: 'select__list',
    listSingle: 'select__header',
    listDropdown: 'select__dropdown',
    item: 'select__item',
    itemSelectable: 'select__item_selectable',
    placeholder: 'select__placeholder',
  },
};

const SelectPluginSystemType = new SelectPlugin(getSelectElement('system-type'), config);

import type { Schema, Attribute } from '@strapi/strapi';

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    external: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.button': UiButton;
    }
  }
}

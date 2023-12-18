import type { Schema, Attribute } from '@strapi/strapi';

export interface UiCard extends Schema.Component {
  collectionName: 'components_ui_cards';
  info: {
    displayName: 'Card';
    icon: 'grid';
  };
  attributes: {
    Image: Attribute.Media;
    Heading: Attribute.String;
    Subheading: Attribute.String;
    Body: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.card': UiCard;
    }
  }
}

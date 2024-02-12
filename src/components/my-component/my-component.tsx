import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import '@solid-design-system/components/dist/package/components/button/button'
import type SdButton from '@solid-design-system/components/dist/package/components/button/button'

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private refSdButton: SdButton;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  componentDidLoad() {
    this.refSdButton.classList.add('red');
    this.refSdButton.variant = 'primary';
    this.refSdButton.variant = 'test';
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}
    <sd-button variant='test' ref={(el) => this.refSdButton = el}>Hello world</sd-button></div>;
  }
}

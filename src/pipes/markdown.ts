import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer , SafeHtml } from '@angular/platform-browser';

import * as marked from 'marked';

@Pipe({name: 'markdown'})
export class MarkdownPipe implements PipeTransform {
  constructor (private sanitizer: DomSanitizer) {}
  transform(value: string): SafeHtml {
    if ( value === undefined ) return '';
    return this.sanitizer.bypassSecurityTrustHtml(marked(value));
  }
}
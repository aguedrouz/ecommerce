import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from '../common/component/card/card.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, CardModule, RouterLink],
  exports: [HeaderComponent],
})
export class HeaderModule {}

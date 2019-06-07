import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { IonicModule } from '@ionic/angular'
import { TranslateModule } from '@ngx-translate/core'

import { TransactionDetailPage } from './transaction-detail.page'
import { ComponentsModule } from 'src/app/components/components.module'

const routes: Routes = [
  {
    path: '',
    component: TransactionDetailPage
  }
]

@NgModule({
  imports: [CommonModule, ComponentsModule, FormsModule, IonicModule, RouterModule.forChild(routes), TranslateModule],
  declarations: [TransactionDetailPage]
})
export class TransactionDetailPageModule {}

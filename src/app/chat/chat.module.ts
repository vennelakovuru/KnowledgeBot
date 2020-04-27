import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import {MatFormFieldModule} from '@angular/material';
import {NgxLinkPreviewModule} from 'ngx-link-preview';



@NgModule({
  declarations: [ChatDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    NgxLinkPreviewModule
  ],
  exports: [
    ChatDialogComponent
  ],
  providers: [ChatService]
})
export class ChatModule { }

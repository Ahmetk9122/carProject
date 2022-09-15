import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from 'ngx-toastr';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(message:string) {
    return this.dialog.open(DialogComponent, {
      width: '390px',
      disableClose: true,
      data:{
        value:message
      }
    });
  }

  openDialog<T,D>(component: ComponentType<T>, config?: MatDialogConfig<D>) {
    return this.dialog.open(component, config);
  }
}

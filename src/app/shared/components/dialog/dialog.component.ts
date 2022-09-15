import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  message: string = ""
  url?: SafeUrl;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<any>, private sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
    this.message = this.data.value
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.value);
  }
  closeDialog() {
    this.dialogRef.close(false);

  }
  goUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.value);
  }


}

import { NotificationService } from './../../services/notification.service';
import { PatchnotesService } from './../../services/patchnotes.service';
import { LoaderService } from './../../loader/loader.service';
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { iPatch } from '../../models/informations';

export interface DialogData {
  id: number;
  title: string;
  content: string;
  owner: string;
  status: string;
}

@Component({
  selector: 'app-editpatchnote',
  templateUrl: './editpatchnote.component.html',
  styleUrls: ['./editpatchnote.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditpatchnoteComponent implements OnInit 
{
  form: FormGroup = new FormGroup({
    title: new FormControl(this.data.title),
    content: new FormControl(this.data.content),
    owner: new FormControl(this.data.owner),
    status: new FormControl(this.data.status),
  });

  constructor(private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<EditpatchnoteComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private patchService: PatchnotesService,
    private loader:LoaderService,
    private notif:NotificationService
  ) {}

  ngOnInit(): void {
  }

  Update()
  {
    this.dialogRef.close();
    
    if(this.form.value.title === this.data.title 
      && this.form.value.content === this.data.content
      && this.form.value.owner === this.data.owner
      && this.form.value.status === this.data.status)
    {
      this.notif.Info(`Aucune modification n'as été apportée.`);
    }
    else
    {
      this.loader.Display("dots", "Modification...", 1500);
      
      var request: iPatch = {
        id: this.data.id,
        title: this.form.value.title,
        content: this.form.value.content,
        owner: this.form.value.owner,
        status: this.form.value.status
      }

      console.log(request);

      setTimeout(() => {
        this.patchService.Update(request);
      }, 1500);
    }
  }

}
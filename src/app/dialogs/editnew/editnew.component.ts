import { NotificationService } from './../../services/notification.service';
import { NewsService } from '../../services/news.service';
import { LoaderService } from './../../loader/loader.service';
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { iNew } from '../../models/informations';

export interface DialogData {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-editnew',
  templateUrl: './editnew.component.html',
  styleUrls: ['./editnew.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditnewComponent implements OnInit 
{
  form: FormGroup = new FormGroup({
    title: new FormControl(this.data.title),
    content: new FormControl(this.data.content),
  });

  constructor(private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<EditnewComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private newService: NewsService,
    private loader:LoaderService,
    private notif:NotificationService
  ) {}

  ngOnInit(): void {
  }

  Update()
  {
    this.dialogRef.close();
    
    if(this.form.value.title === this.data.title && this.form.value.content === this.data.content)
    {
      this.notif.Info(`Aucune modification n'as été apportée.`);
    }
    else
    {
      this.loader.Display("dots", "Modification...", 1500);

      var request: iNew = {
        id: this.data.id,
        title: this.form.value.title,
        content: this.form.value.content
      }
      
      setTimeout(() => {
        this.newService.Update(request);
      }, 1500);
    }
  }

}
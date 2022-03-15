import { NotificationService } from './../../services/notification.service';
import { EditpatchnoteComponent } from './../../dialogs/editpatchnote/editpatchnote.component';
import { AuthService } from '../../services/auth.service';
import { LoaderService } from '../../loader/loader.service';
import { PatchnotesService } from './../../services/patchnotes.service';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import * as Notiflix from 'notiflix';
import { iPatch } from '../../models/informations';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patchnotes',
  templateUrl: './patchnotes.component.html',
  styleUrls: ['./patchnotes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatchnotesComponent implements OnDestroy, OnInit
{
  patchnotes: any = [];
  constructor(
    public patchService: PatchnotesService, 
    public Loader: LoaderService, 
    private authService:AuthService, 
    private dialog: MatDialog, 
    private changeDetectorRef: ChangeDetectorRef,
    private notif:NotificationService) {}

  AddForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    status: new FormControl('En cours'),
  });
  
  /* PAGINATOR CONSTRUCTORS */
  @ViewChild(MatPaginator) paginator: MatPaginator;

  Obs: Observable<any>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  /* PAGINATOR CONSTRUCTORS */

  LoadPatchNotes(): void
  {
    this.patchService.Get().subscribe(data => {
      this.patchnotes = data;
      this.dataSource.data = data;
    });
  }

  /**
   * Insert
   */
  InsertPatch(): void
  {
    Notiflix.Confirm.init({
      plainText: false,
      cancelButtonBackground: '#B60000',
      backgroundColor: '#262626',
      messageColor: '#ffffff',
      cssAnimationStyle: 'zoom'
    }),
    Notiflix.Confirm.show(
      'Confirmation',
      `Voulez-vous ajouter <span class="text-danger">${this.AddForm.value.title}</span>`,
      'Oui',
      'Non',
      () => {
        var request: iPatch = {
          id: 0,
          title: this.AddForm.value.title,
          content: this.AddForm.value.content,
          owner: this.authService.GetUserData("username"),
          status: this.AddForm.value.status
        }
        this.patchService.Insert(request);
        
        this.LoadPatchNotes();
        this.AddForm.reset();
      },
    );
  }

 /**
   * Update News by id
   */
  UpdatePatch(id:number, title:string, content:string, owner:string, status:string): void
  {
    const ref = this.dialog.open(EditpatchnoteComponent, {
      id: 'editpatch',
      data: {
        id: id,
        title: title,
        content: content,
        owner: owner,
        status: status
      }
    });
  }

  /**
   * Delete News by id
   */
  DeletePatch(name: string, id: number): void
  {
    Notiflix.Confirm.init({
      plainText: false,
      cancelButtonBackground: '#B60000',
      backgroundColor: '#262626',
      messageColor: '#ffffff',
      cssAnimationStyle: 'zoom'
    }),
    Notiflix.Confirm.show(
      'Confirmation',
      `Voulez-vous supprimer <span class="text-danger">${name}</span>`,
      'Oui',
      'Non',
      () => {
        this.patchService.Delete(id)
        .subscribe((res) => {
          this.notif.Success(`<span class='text-danger'>${name}</span> supprimé avec succès !`);
          this.LoadPatchNotes();
        })
      },
    );
  }

  ngOnInit(): void {
    this.LoadPatchNotes();
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.Obs = this.dataSource.connect();
  }

  ngOnDestroy(): void {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

  options: AnimationOptions = {
    path: 'https://assets9.lottiefiles.com/packages/lf20_2ssi3w5b.json',
  };
}

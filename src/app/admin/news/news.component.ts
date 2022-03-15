import { NotificationService } from './../../services/notification.service';
import { EditnewComponent } from './../../dialogs/editnew/editnew.component';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from '../../loader/loader.service';
import { NewsService } from '../../services/news.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import * as Notiflix from 'notiflix';
import { iNew } from '../../models/informations';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnDestroy, OnInit 
{
  news: any = [];
  constructor(
    public newsService: NewsService, 
    public Loader: LoaderService, 
    private dialog: MatDialog, 
    private changeDetectorRef: ChangeDetectorRef,
    private notif: NotificationService) { }

  AddForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  /* PAGINATOR CONSTRUCTORS */
  @ViewChild(MatPaginator) paginator: MatPaginator;

  Obs: Observable<any>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  /* PAGINATOR CONSTRUCTORS */

  LoadNews(): void
  {
    this.newsService.Get().subscribe(data => {
      this.news = data;
      this.dataSource.data = data;
    });
  }
 
  InsertNew(): void
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
        var request: iNew = {
          id: 0,
          title: this.AddForm.value.title,
          content: this.AddForm.value.content
        }
        this.newsService.Insert(request);
        
        this.LoadNews();
        this.AddForm.reset();
      },
    );
  }

  /**
   * Delete News by id
   */
  DeleteNew(name: string, id: number): void
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
        this.newsService.Delete(id)
        .subscribe(() => {
          this.notif.Success(`<span class='text-danger'>${name}</span> supprimé avec succès !`);
          this.LoadNews();
        })
      },
    );
  }

  /**
   * Update News by id
   */
  UpdateNew(id:number, title:string, content:string): void
  {
    const ref = this.dialog.open(EditnewComponent, {
      id: 'editnew',
      data: {
        id: id,
        title: title,
        content: content,
      }
    });
  }

  ngOnInit(): void {
    this.LoadNews();
    
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
    path: 'https://assets4.lottiefiles.com/packages/lf20_ehzra5x6.json',
  };
}

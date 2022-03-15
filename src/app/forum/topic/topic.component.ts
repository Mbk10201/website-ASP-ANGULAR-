import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { LoaderService } from './../../loader/loader.service';
import { ForumService } from './../../services/forum.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, Component, ViewChild, OnInit } from '@angular/core';
import { iPost, iTopic, iCategory } from '../../models/forum';
import { iUser } from '../../models/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as Notiflix from 'notiflix';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicComponent implements OnDestroy, OnInit {
  posts: any[] = [];
  user: any[] = [];
  topic_id: number = -1;
  topic_category: number = -1;
  topic_subject: string = "";
  topic_content: string = "";
  topic_date: string = "";
  topic_user: string = "";
  form = new FormGroup({
    content: new FormControl(''),
  });

  /* PAGINATOR CONSTRUCTORS */
  @ViewChild(MatPaginator) paginator: MatPaginator;

  Obs: Observable<any>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  /* PAGINATOR CONSTRUCTORS */

  constructor(
    private forum: ForumService,
    private router: Router,
    private route: ActivatedRoute,
    public Loader: LoaderService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    public auth: AuthService,
    private changeDetectorRef: ChangeDetectorRef) {
      this.route.queryParams.subscribe(params => {
        if (params['id']) {
          this.topic_id = params['id'];
        }
        else
          this.router.navigate(["/forum"]);
      });
  }

  ngOnInit(): void {
    
    this.form = this.formBuilder.group(
      {
        content: ['', Validators.required],
      }
    );

    this.forum.GetTopicById(this.topic_id).subscribe(res => {
      this.topic_subject = res[0].subject;
      this.topic_content = res[0].content;
      this.topic_date = res[0].date;
      this.topic_category = res[0].category;
      
      this.userService.GetUserByID(res[0].by).subscribe(res => {
        this.topic_user = res[0].username
      });
    });

    this.LoadPosts(this.topic_id);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.Obs = this.dataSource.connect();
  }

  ngOnDestroy(): void {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

  LoadPosts(topic: number): void {
    //this.posts = [];
    this.forum.GetPostsByTopic(topic).subscribe(data => {
      this.posts = data;
      this.dataSource.data = data;
    });
  }

  InsertPost(): void {
    var post: iPost = {
      id: -1,
      content: this.form.value.content,
      date: "",
      topic: this.topic_id,
      by: this.user[0].id
    }

    this.forum.AddPost(post).subscribe({
      next: () => {
        Notiflix.Notify.success('Réponse ajoutée avec succès.');
        this.form.reset();
        this.LoadPosts(this.topic_id);
      },
      error: error => {
        Notiflix.Report.failure(
          'Un problème est survenu',
          error.error,
          'Réessayer',
        );
      }
    });
  }

  DeletePost(id: number): void {

    Notiflix.Confirm.init({
      plainText: false,
      cancelButtonBackground: '#B60000',
      backgroundColor: '#262626',
      messageColor: '#ffffff',
      cssAnimationStyle: 'zoom'
    }),
      Notiflix.Confirm.show(
        'Confirmation',
        `Voulez-vous supprimer cette réponse ?`,
        'Oui',
        'Non',
        () => {
          this.forum.DeletePost(id).subscribe({
            next: () => {
              Notiflix.Notify.success('Réponse supprimée.');
              this.LoadPosts(this.topic_id);
            },
            error: error => {
              Notiflix.Report.failure(
                'Un problème est survenu',
                error.error,
                'Réessayer',
              );
            }
          });
        },
      );
  }

  DeleteTopic(id: number, cat: number): void {
    Notiflix.Confirm.init({
      plainText: false,
      cancelButtonBackground: '#B60000',
      backgroundColor: '#262626',
      messageColor: '#ffffff',
      cssAnimationStyle: 'zoom'
    }),
    Notiflix.Confirm.show(
      'Confirmation',
      `Voulez-vous supprimer <span class="text-danger">${this.topic_subject}</span>`,
      'Oui',
      'Non',
      () => {
        this.forum.DeleteTopic(id).subscribe({
          next: () => {
            Notiflix.Notify.success('Topic supprimée.');
            this.router.navigate(["/forum/category"], { queryParams: { id: cat } });
          },
          error: error => {
            Notiflix.Report.failure(
              'Un problème est survenu',
              error.error,
              'Réessayer',
            );
          }
        });
      },
    );
  }
}

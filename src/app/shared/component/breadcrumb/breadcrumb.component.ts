import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { ImagePaths } from 'src/image/imagen.enun';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit{

  public breadcrumbs: { parentBreadcrumb? : string | null; childBreadcrumb?: string; } ;
  public title : string = '';
  public subtitulo: string = '';
  iconHome = ImagePaths.iconHome;
  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router
    ) {
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {
        let snapshot = this.router.routerState.snapshot;
        let title = route.snapshot.data['title'];
        let subtitulo = route.snapshot.data['subtitulo']
        let parent = route.parent?.snapshot.data['breadcrumb'];
        let child = route.snapshot.data['breadcrumb'];
        this.breadcrumbs =  {};
        this.title = title;
        this.subtitulo = subtitulo;
        this.breadcrumbs ={
          "parentBreadcrumb" : parent,

          "childBreadcrumb" : child
        }
      })
    }
    

  ngOnInit(): void {
    
  }

  ngOnDestroy() {}
}

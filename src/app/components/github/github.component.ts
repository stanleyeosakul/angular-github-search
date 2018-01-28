import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styles: []
})
export class GithubComponent {

  user: any;
  repos: any;
  username: string;

  constructor(private githubService: GithubService) { }

  search() {
    this.githubService.updateUsername(this.username);
    this.githubService.getUser().subscribe(user => this.user = user);
    this.githubService.getRepos().subscribe(repos => this.repos = repos);
  }

  reset() {
    this.user = null;
    this.username = null;
  }

}

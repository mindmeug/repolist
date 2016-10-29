import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { GitHubService } from '../../providers/git-hub-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubService]
})
export class HomePage {

  public foundRepos;
  public username;

  constructor(public navCtrl: NavController, public github: GitHubService) {

  }

  getRepos() {
    this.github.getRepos(this.username).subscribe(
      // handle the data that is returned
      data => {
        this.foundRepos = data.json();
      },
      // handle errors
      err => console.error(err),
      // will be called when the Observable has completed without errors
      () => console.log('getRepos completed')
    );
  }
}

import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { GitHubService } from '../../providers/git-hub-service';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'details.html',
  providers: [GitHubService]
})
export class Details {

  public readme = '';
  public repo;

  constructor(public navCtrl: NavController, private github: GitHubService, private navParams: NavParams) {
    this.repo = navParams.get('repo');

    this.github.getDetails(this.repo).subscribe(
      data => this.readme = data.text(),
      error => {
        if(error.status == 404) {
          this.readme = 'This repo does not have a Readme. :(';
        } else {
          console.log(error);
        }
      },
      () => console.log('get details completed')
    )
  }



  ionViewDidLoad() {
    console.log('Hello Details Page');
  }


}

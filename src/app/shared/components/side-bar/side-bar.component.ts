import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  changeThemeMode() {
    this.themeService.changeTheme();
  }

}

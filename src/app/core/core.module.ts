import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { recipeStorage } from '../shared/recipe-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppinglistService,
    RecipeService,
    recipeStorage,
    AuthService
  ]
})
export class CoreModule {}

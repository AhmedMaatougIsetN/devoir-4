import { Routes } from '@angular/router';
import { laptopsComponent } from './laptops/laptops.component';
import { AddlaptopComponent } from './add-laptop/add-laptop.component';
import { UpdatelaptopComponent } from './update-laptop/update-laptop.component';

export const routes: Routes = [
    {path: "laptops", component : laptopsComponent},
    {path: "add-laptop", component : AddlaptopComponent},
    {path: "updatelaptop/:id",  component: UpdatelaptopComponent},
    {path: "", redirectTo: "laptops", pathMatch: "full"}
];

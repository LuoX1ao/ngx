import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DatabaseComponent } from './database.component';
import { MysqlComponent } from './mysql/mysql.component';
import { OracleComponent } from './oracle/oracle.component';
import { SqlserverComponent } from './sqlserver/sqlserver.component';

const routes: Route[] = [{
    path: '', component: DatabaseComponent, children: [{
      path: 'mysql', component: MysqlComponent
  }, {
      path: 'oracle', component: OracleComponent
  }, {
      path: 'sqlserver', component: SqlserverComponent
  }]
}];

@NgModule({
    declarations: [DatabaseComponent, MysqlComponent, OracleComponent, SqlserverComponent],
    imports: [RouterModule.forChild(routes)]
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasModule } from './pizzas/pizzas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { RecipeModule } from './recipe/recipe.module';
import { CalzoneModule } from './calzone/calzone.module';

@Module({
  imports: [PizzasModule,ConfigModule.forRoot({
    envFilePath:".env"
  }),
  TypeOrmModule.forRoot({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: true,
  }),
  RecipeModule,
  CalzoneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './user.controller';
import { UserService } from './user.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [UserService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World! "', () => {
      expect(appController.getHello()).toBe('Hello World! i am rut פםפםפםפם!!!');
    });
  });
});

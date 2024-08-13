import { Test } from '@nestjs/testing';
import { TaskService } from './task.service';
import { TasksRepository } from './task.repository';
const mockRepository = () => ({
  getTasks: jest.fn(),
});
const mockuser = {
  username: 'neha',
  id: '1',
  password: 'hello',
  tasks: [],
};
describe('Task service', () => {
  let tasksService: TaskService;
  let tasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TaskService,
        { provide: TasksRepository, useFactory: mockRepository },
      ],
    }).compile();
    tasksService = await module.get(TaskService);
    tasksRepository = await module.get(TasksRepository);
  });
  describe('gettasks', () => {
    it('calls taskrepository.gettasks and return the result', async () => {
      expect(tasksRepository.getTasks).not.toHaveBeenCalled();
      tasksRepository.getTasks.mockResolvedValue('somevalue');
      const result = await tasksService.getTasks(null, mockuser);
      expect(tasksRepository.getTasks).toHaveBeenCalled();
      expect(result).toEqual('somevalue');
    });
  });
});

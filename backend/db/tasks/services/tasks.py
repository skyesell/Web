from db.tasks.models import Statistic, Task


class TaskService:
    def __init__(self, user_id):
        self.user_id = user_id

    async def get_statistic(self) -> Statistic:
        statistic, _ = await Statistic.get_or_create(user_id=self.user_id)
        return statistic

    async def create_tasks(self, text: str):
        statistic = await self.get_statistic()
        task = await Task.create(
            user_id=self.user_id,
            text=text
        )

        statistic.created += 1
        await statistic.save()

        return task

    async def delete_task(self, task: Task):
        statistic = await self.get_statistic()
        await task.delete()

        statistic.deleted += 1
        await statistic.save()

    async def check_task(self, task: Task):
        statistic = await self.get_statistic()
        statistic_diff = 1

        if task.finished:
            statistic_diff = -1

        task.finished = not task.finished
        statistic.finished += statistic_diff

        await task.save()
        await statistic.save()

        return task

    async def get_tasks(self):
        return Task.filter(user_id=self.user_id)

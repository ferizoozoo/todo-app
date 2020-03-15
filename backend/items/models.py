from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class TodoItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    deadline_at = models.DateTimeField()
    active = models.BooleanField()
    completed = models.BooleanField()
    priority = models.BooleanField()
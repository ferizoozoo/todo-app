from rest_framework import serializers
from .models import TodoItem

class TodoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoItem
        fields = ['id', 'user', 'task', 'created_at', 'deadline_at', 'active', 'completed', 'priority']
from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from .models import TodoItem
from .serializers import TodoItemSerializer

# Create your views here.
class TodoItemViewSet(viewsets.ModelViewSet):
    queryset = TodoItem.objects.all()
    serializer_class = TodoItemSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]